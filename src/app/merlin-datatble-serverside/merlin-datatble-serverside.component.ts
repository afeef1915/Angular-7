
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
import { DynamicFormBuilderComponent } from '../dynamic-form-builder/dynamic-form-builder.component';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
class DataTablesResponse {
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
export class MerlinDatatbleServersideComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  // dtColumns: DataTables.Settings = {};
  public persons: Person[];
  // public person: Person[];
  publicDeals: Person[] = [];
  publicDeals1: Person[] = [];
  publicDeals2: Person[] = [];

  p_col: any;
  headers_columns: any;
  headers_columns_new: any;
  headers_column: any;
  search_submitted = false;
  //datatablesearchForm: FormGroup;
  public form: FormGroup;
  values: any;
  filters: any;
  p2: any = [];
  colums: any[];
  dtTrigger: Subject<any> = new Subject();
  send_data_service: any = {};
  @ViewChild(DataTableDirective ,{static: false})
  datatableElement: DataTableDirective;
  //const list: string[] = [];
  users$: any[] = [];
  dt: any[];

  private api_url1 = 'http://localhost/angular7demo/person.php?type=datatable-stuct';
  //private api_url = 'http://localhost/angular7demo/index.php';
  private api_url = 'http://localhost/angular7demo/person.php?type=datatable-test';
  p: { data: string; }[];
  p1: string[];
  search_flag: boolean;
  // search_data: any;
  search_data: any = {};
  filter_vals: any;
  params: string;
  //public globalVar = 'afeef';
  // arr: ColumnSettings[];
  // list: ColumnSettings[];
  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'date',
      name: 'dateOfBirth',
      label: 'Date of Birth',
      value: '',
      required: true,
    },
    // {
    //   type: 'dropdown',
    //   name: 'country',
    //   label: 'Country',
    //   value: 'in',
    //   required: true,
    //   options: [
    //     { key: 'in', label: 'India' },
    //     { key: 'us', label: 'USA' }
    //   ]
    // },
    // {
    //   type: 'radio',
    //   name: 'gender',
    //   label: 'Gender',
    //   value: 'in',
    //   required: true,
    //   options: [
    //     { key: 'm', label: 'Male' },
    //     { key: 'f', label: 'Female' }
    //   ]
    // },
    // {
    //   type: 'checkbox',
    //   name: 'hobby',
    //   label: 'Hobby',
    //   required: true,
    //   options: [
    //     { key: 'f', label: 'Fishing' },
    //     { key: 'c', label: 'Cooking' }
    //   ]
    // }

  ];
  button_label: any;
  input_val: any;
  // @ViewChild(DynamicFormBuilderComponent) component1: DynamicFormBuilderComponent;
  message: any;
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
    // this.datatablesearchForm = new FormGroup({
    //   fields: new FormControl(JSON.stringify(this.fields))
    // });
    const that = this;
    const list: string[] = [];
    this.getOtherDetails();
    this.p_col = this.publicDeals;

    this.datatabldata();
  }

  datatabldata() {
 

    console.log('input_val==========');
    //console.log(input_val);

    
   this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      searching: false,
      ajax: (dataTablesParameters: any, callback) => {
        this.httpClient
          .post<DataTablesResponse>(

            this.api_url + '&types=filter_data&data=' + JSON.stringify(this.input_val),

            //this.api_url,
            dataTablesParameters,
            {},

          ).subscribe(resp => {

            // console.log('checking datata');
            // console.log(this.form.value);
            // console.log(this.publicDeals1);
            if (this.publicDeals1.length > 0) {
              //console.log('iff when filter active search');

              this.persons = this.publicDeals1;
              //console.log(that.persons);
            } else {
              //console.log('else when no saerch datat');
              this.persons = resp.data;
            }

            // this.dtTrigger.next();
            //console.log(resp);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: [],
              // formdata: this.datatablesearchForm.value,

            });
          });
      },
      //  columns: that.headers_column,
      columns: this.p_col,


    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  // ngAfterViewInit() {
  //    // this.message = this.component1.onSubmit();
  //     console.log('im here-=========');
  //     // console.log(this.message);
  //   // }
  // }

  receiveMessage($event) {
    // console.log('testtstsing');
    // console.log($event);
    this.filterById($event);
    //this.datatabldata($event);
    //this.message = $event;
  }

  getOtherDetails() {

    return this.personservice.getDatatableDetails()
      .subscribe(persons => {
        this.button_label = persons.button_label;
        this.headers_columns = persons.TABLE_FIELDS;
        this.headers_column = persons.TABLE_FIELD;
        // this.users$ = persons;
        this.headers_columns_new = this.getKeys(persons.data[0]);
        this.dtTrigger.next();
        // console.log(this.users$);
        persons.TABLE_FIELD.forEach(element => {
          this.publicDeals.push(element);

        });
        persons.FIELDS_FILTERS.forEach(element => {
          this.publicDeals2.push(element);
          // console.log(this.publicDeals);
        });
        this.form = new FormGroup({
          fields: new FormControl(this.publicDeals)
        });

      });

  }

  getFields() {

    // console.log(this.publicDeals2);
    return this.publicDeals2;
  }
  // getOtherDetails(): void {
  //   this.http.get(this.api_url1)
  //     .map(this.extractData)
  //     .subscribe(persons => {
  //       this.headers_columns = persons.TABLE_FIELDS;
  //       this.headers_column = persons.TABLE_FIELD;
  //       this.users$ = persons;
  //       this.headers_columns_new = this.getKeys(persons.data[0]);
  //       this.dtTrigger.next();
  //     });
  // }


  filterById(event: any) {

    this.input_val = event;
    //this.datatabldata(event);
    // if (!event) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // console.log('datatatble===in');
      // console.log(event);
      // Destroy the table first
      dtInstance.destroy();
      this.dtTrigger.next();
      this.publicDeals1 = [];
      this.filter_vals = event;

      // console.log(this.form.value);
     // console.log('form value=========');
      //console.log(event);
      return this.personservice.searchData(event)
        .subscribe(data => {
          this.send_data_service = data;

          // console.log(this.send_data_service);

          if (this.send_data_service.data.length > 0) {
            this.send_data_service.data.forEach(element => {
              //console.log('element======loop');
            //  console.log(element);
              this.publicDeals1.push(element);
              // this.search_data = element;
            });
           // console.log('publicDeals1=======array=====');
           // console.log(this.publicDeals1);
          }

        });
      //dtInstance.draw();
      // dtInstance.search(this.datatablesearchForm.value.first_name || this.datatablesearchForm.value.last_name).draw();

    });

    //}
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
  private getKeys(value: any): Array<String> {
    return Object.keys(value);
  }

}
