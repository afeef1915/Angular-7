import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { PersonService } from '../person.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../person';

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
  selector: 'app-datatable-template',
  templateUrl: './datatable-template.component.html',
  styleUrls: ['./datatable-template.component.css']
})
export class DatatableTemplateComponent implements OnInit, AfterViewInit {

  private new_url = 'http://localhost/angular7demo/person.php?type=datatable-stuct';
  private test_url = 'http://localhost/angular7demo/person.php?type=datatable-test';
  private test_url1 = 'http://localhost/angular7demo/person.php?type=datatable-test1';
  Search$: Observable<Person>;
  persons: Person[];
 
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  constructor(private personservice: PersonService, private httpClient: HttpClient) { }
  dtOptions: DataTables.Settings = {};


  ngOnInit(): void {
    this.personservice.getDatatableDetails()
      .subscribe(persons => this.persons = persons);
    console.log(this.persons);

    this.dtOptions = {
      ajax: this.test_url,
      columns: [
          // this.test_url1;
        //this.persons.data_datatble.TABLE_FIELDS.first_name
        // console.log(this.persons);
        //   {

        //   title: 'ID',
        //   data: 'id'
        // }, {
        //   title: 'First name',
        //   data: 'first_name'
        // }, {
        //   title: 'Last name',
        //   data: 'last_name'
        // }
      ]
    };
    //get datat from db and render in datatble



  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }
}
