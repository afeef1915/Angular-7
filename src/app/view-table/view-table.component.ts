import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../person';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

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
@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})

export class ViewTableComponent implements OnInit {
  //persons: Person[];
  private  api_url  = 'http://localhost/angular7demo/person.php?type=datatable-test';
  private api_url1  =  'http://localhost/angular7demo/person.php?type=datatable-stuct';

  // fetch or create an Object of UserDetails type and pass it to dynamic-table
  //private userDetails: Array<UserDetails>;
  private persons: Array<Person>;
  // required to provide the table header, you can call an api or hard code the column name.
  private tableHead: Array<String>;  
  // optional, you can hard code the property name or just send the data of an object and dynamic-table component will figure out.
  private tableColName: Array<String>;  
  headers_columns: any;

  constructor(private http: Http, private personservice: PersonService, private httpClient: HttpClient) {
    
     // this.tableHead = new Array<String>('Id', 'FIRSTNAME', 'LASTNAME');
      //this.tableColName = new Array<String>('id', 'first_name', 'last_name');
   
      this.persons = new Array<Person>();
  }
   ngOnInit() {

    //xhr request

    this.http.get(this.api_url1)
    .map(this.extractData)
    .subscribe(persons => {
      this.headers_columns = persons.TABLE_FIELDS; this.persons = persons.data;
      console.log(this.persons);
     });
   }
   private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}

