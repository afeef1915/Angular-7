
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

@Component({
  selector: 'app-merlin-datatable',
  templateUrl: './merlin-datatable.component.html',
  styleUrls: ['./merlin-datatable.component.css']
})
export class MerlinDatatableComponent implements OnDestroy, OnInit   {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  min: number;
  max: number;
  // first_name: string;
  // last_name: string;
  private apiUrl = 'http://localhost/angular7demo/person.php?type=get-person1';
  private new_url = 'http://localhost/angular7demo/person.php?type=datatable-stuct';
  private api_url = 'http://localhost/angular7demo/person.php?type=datatable-test';
  private api_url1 = 'http://localhost/angular7demo/person.php?type=datatable-stuct';

  Search$: Observable<Person>;
  //dtOptions: any = {};
  constructor(private router: Router, private http: Http, private personservice: PersonService, private httpClient: HttpClient,
    private formBuilder: FormBuilder) { }
   
  send_data_service: any = {};
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // dtTrigger: Subject = new Subject();
  headers_columns: any;
  headers_columns_new: any;
  persons: Person[];
  search_submitted = false;
  datatablesearchForm: FormGroup;
  values: any;
  filters: any;
  @Input() fields: any[] = [];
  form: FormGroup;


  ngOnInit(): void {

    this.datatablesearchForm = this.formBuilder.group({
      id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      f_name: ['', Validators.required],
      l_name: ['', Validators.required]
    });



    this.http.get(this.api_url1)
      .map(this.extractData)
      .subscribe(persons => {

        this.headers_columns = persons.TABLE_FIELDS; this.persons = persons.data;
        this.headers_columns_new = this.getKeys(persons.data[0]);
        this.filters = persons.FIELDS_FILTERS;

        console.log(this.filters);
        
        this.dtTrigger.next();
      });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      // serverSide: true,
      // processing: true,
    };


  }

  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  // }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
  private getKeys(value: any): Array<String> {
    //console.log(value);
    //console.log(Object.keys(value));
    return Object.keys(value);
  }

  //filterById(event: any) {
    
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
      // Destroy the table first
     // dtInstance.destroy();
      // Call the dtTrigger to rerender again
      //this.dtTrigger.next();
    });
     }
  
    
    // rerender(): void {
    //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //     dtInstance.columns().every(function () {
    //       const that = this;
    //       $('#button').on('click', function () {
    //         if (that.search() !== this['value']) {
    //           that
    //             .search(this['value'])
    //             .draw();
    //         }
    //       });
    //       dtInstance.destroy();
    //   // Call the dtTrigger to rerender again
    // //  dtTrigger.next();
    //     });
    //   });
    // }
    /*
        console.log('trying to saerch data in filters');
        // onst inputValue = event.target.value;
        console.log(event.target);
    
        const first_name = event.target.first_name.value;
        const last_name = event.target.last_name.value;
        const f_name = event.target.f_name.value;
        const l_name = event.target.l_name.value;
        this.send_data_service = { 'first_name': first_name, 'last_name': last_name, 'f_name': f_name, 'l_name': l_name };
        // console.log(send_data_service);
        console.log(event.target.value);
    
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    
          this.personservice.searchData(this.send_data_service)
            .subscribe(data =>
              this.send_data_service = data);
    
          dtInstance.search(first_name).draw();
          // Destroy the table first
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next();
        });
    
    */
 

}
