import { Component, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { interval } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchWord$: Observable<string[]>;
  private search$ = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.searchWord$ = this.search$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(text => text
        ? this.loadWord(text)
        : Observable.of([]))
      .catch(() => Observable.of([]));
  }

  public search(text: string): void {
    this.search$.next(text);
  }


  private loadWord(text: string): Observable<string[]> {
    console.log('search elemenets');
    console.log(text);
    const url = `http://localhost/angular7demo/person.php?type=search-fields&search=${text}`;
    return Observable.timer(1000)
      .switchMap(() => this.httpClient.get<[string, string[]]>(url))
      .map(data => data[1]);
  }


}
