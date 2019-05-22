import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Person } from '../person';
import 'rxjs/add/operator/map';
import { PersonService } from '../person.service';


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-datatable-serverside',
  templateUrl: './datatable-serverside.component.html',
  styleUrls: ['./datatable-serverside.component.css']
})
export class DatatableServersideComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
  }



}
