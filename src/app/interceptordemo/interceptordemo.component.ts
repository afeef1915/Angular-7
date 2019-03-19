import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Person } from '../person';
import 'rxjs/add/operator/map';
import { PersonService } from '../person.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-interceptordemo',
  templateUrl: './interceptordemo.component.html',
  styleUrls: ['./interceptordemo.component.css']
})
export class InterceptordemoComponent implements OnInit {
  private apiUrl = 'http://localhost/angular7demo/person.php?type=get-person';
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.apiUrl).subscribe(() => {
      console.log('Http Call is success from compoennt');
    }, (error) => {
      console.log('Http Call is failed from component');
    });
    
  }

}
