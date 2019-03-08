import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Person } from '../person';
import 'rxjs/add/operator/map';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-datatableexample',
  // moduleId: module.id,
  templateUrl: './datatableexample.component.html',
  styleUrls: ['./datatableexample.component.css']
})
export class DatatableexampleComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  //dtTrigger: Subject = new Subject<string>();
  //private dtTrigger = new Subject<string>();
  dtTrigger: Subject<any> = new Subject();
  persons: Person[] = [];
  //dtOptions: any = {};

  private apiUrl = 'http://localhost/angular7demo/person.php?type=get-person';
  constructor(private http: Http, private personservice: PersonService) { }

  ngOnInit(): void {

    //this.getPersonMetaData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // dom: 'Bfrtip',
      // // Configure the buttons
      // buttons: [
      // 'columnsToggle',
      // 'colvis',
      // 'copy',
      // 'print',
      // 'excel',
      // {
      // text: 'Some button',
      // key: '1',
      // action: function (e, dt, node, config) {
      // alert('Button activated');
      // }
      // }
      // ]
      // };
      // }
    };
    // Declare the use of the extension in the dom parameter

    this.http.get(this.apiUrl)
      .map(this.extractData)
      .subscribe(persons => {
        this.persons = persons;
        this.dtTrigger.next();
      });



  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  getPersonMetaData(): void {

    this.personservice.getPersonMetaData()
      .subscribe(persons => { this.persons = persons; this.dtTrigger.next(); });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

}
