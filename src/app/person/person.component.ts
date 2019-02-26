import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { Pipe, PipeTransform } from '@angular/core';
import { DatapipePipe } from '../datapipe.pipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


import { interval } from 'rxjs';
// import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: Person[];
  public searchWord$: Observable<string[]>;
  private data = [];
  private search$ = new Subject<string>();
  heroes$: Observable<Person>;
  private searchTerms = new Subject<string>();


  //  private apiUrl = 'http://localhost/angular7demo/person.php';
  constructor(private router: Router, private location: Location, private personservice: PersonService, private httpClient: HttpClient) { }
  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.getPersonMetaData();
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.personservice.loadWord(term)),
    );
  }

  
  getPersonMetaData(): void {
    console.log('get all person');
    this.personservice.getPersonMetaData()
      .subscribe(persons => this.persons = persons);
    console.log(this.persons);
  }

  viewDetails(selected_id): void {
    console.log('view details function');
    console.log(selected_id);
    this.router.navigate(['/person/edit', selected_id]);
  }
  goBack(): void {
    this.location.back();
  }

  DeleteDetails(persons: Person): void {
    this.personservice.deletePerson(persons)
      .subscribe(data => {
        this.persons = this.persons.filter(u => u !== persons);
        console.log('delte data ');
        confirm('Are You Confirm you want to Delete the Data');
        this.router.navigate(['/person/list']);
        //window.location.reload();
         this.getPersonMetaData();
      });
  }

  //  DeleteDetails(selected_id): void {
  //   // console.log(selected_id);
  //   // console.log('delete =>id');

  //    this.personservice.deletePerson(selected_id)
  //   .subscribe(persons => console.log('dlete the data'));
  //  // console.log( this.persons);
  //   // this.personservice.deletePerson(selected_id)
  //   //         .subscribe(() => this.router.navigate(['/person']));
  // }
  addDetails(): void {
    this.router.navigate(['/person/add']);
  }
}
