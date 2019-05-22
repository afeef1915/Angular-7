
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
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

import { TextboxComponent } from '../textbox/textbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
class DataTablesResponse {
  filters(filters: any) {
    throw new Error("Method not implemented.");
  }
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-merlin-datatble-serverside',
  templateUrl: './merlin-datatble-serverside.component.html',
  styleUrls: ['./merlin-datatble-serverside.component.css']
})
export class MerlinDatatbleServersideComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtColumns: DataTables.Settings = {};
  persons: Person[];
  p_col = [];
  headers_columns: any;
  headers_columns_new: any;
  headers_column: any;
  search_submitted = false;
  datatablesearchForm: FormGroup;
  values: any;
  filters: any;
  p2: any = [];
  dtTrigger: Subject<any> = new Subject();
  send_data_service: any = {};
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  //const list: string[] = [];


  private api_url1 = 'http://localhost/angular7demo/person.php?type=datatable-stuct';
  private api_url= 'http://localhost/angular7demo/index.php';
  p: { data: string; }[];
  p1: string[];
  //public globalVar = 'afeef';
  // arr: ColumnSettings[];
  // list: ColumnSettings[];

  constructor(private httpClient: HttpClient, private http: Http, private formBuilder: FormBuilder,
    private personservice: PersonService) { }

  ngOnInit(): void {

    // this.datatablesearchForm = this.formBuilder.group({
    //   id: ['', Validators.required],
    //   first_name: ['', Validators.required],
    //   last_name: ['', Validators.required],
    //   date_of_birth: ['', Validators.required],
    //   f_name: ['', Validators.required],
    //   l_name: ['', Validators.required]
    // });

    const that = this;
    // that.p = [{ data: 'id' }, { data: 'first_name' }, { data: 'last_name' }, { data: 'date_of_birth' }];
    that.p = [{ "data": "id" }, { "data": "first_name" }, { "data": "last_name" }, { "data": "date_of_birth" }];
    const list: string[] = [];
    
    this.getOtherDetails();
    

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.httpClient
          .post<DataTablesResponse>(
            this.api_url,
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;
            console.log(resp);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: [],

            });
          });
      },
      //  columns: that.headers_column,
       columns: that.p,


    };


  }

  

  getOtherDetails(): void {
    this.http.get(this.api_url1)
      .map(this.extractData)
      .subscribe(persons => {
        this.headers_columns = persons.TABLE_FIELDS;
        this.headers_column = persons.TABLE_FIELD;
        this.headers_columns_new = this.getKeys(persons.data[0]);
        this.dtTrigger.next();
      });
  }

  filterById(event: any) {

    console.log('search backend');
    console.log(this.datatablesearchForm.value);
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {

      this.personservice.searchData(this.datatablesearchForm.value)
        .subscribe(data =>
          this.send_data_service = data);

      console.log(this.datatablesearchForm.value.first_name);
      console.log(this.datatablesearchForm.value.last_name);
      console.log(this);

      dtInstance.search(this.datatablesearchForm.value.first_name || this.datatablesearchForm.value.last_name).draw();

    });
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
  private getKeys(value: any): Array<String> {
    return Object.keys(value);
  }

}
