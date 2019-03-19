import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Person } from '../person';
import 'rxjs/add/operator/map';
import { PersonService } from '../person.service';
@Component({
  selector: 'app-ajaxtest',
  templateUrl: './ajaxtest.component.html',
  styleUrls: ['./ajaxtest.component.css']
})
export class AjaxtestComponent implements OnInit {
  persons: Person []  = [];
  names: String;
  constructor( private http: HttpClient, private personService: PersonService  ) { }
  name = 'Afeef';

  ngOnInit() {
    this.getPersonDetails();
  }
  // getPersonMetaData(): void {

  // //   this.personservice.getPersonMetaData()
  // //     .subscribe(persons => { this.persons = persons; this.dtTrigger.next(); });
  // // }

  getPersonDetails(): void  {
    this.personService.getPersonMetaData()
                  .subscribe( persons => {
                                  this.persons  = persons;
                                  console.log(persons);
                                } );

                                this.names =  name;
                                console.log(this.name);
  }
}
