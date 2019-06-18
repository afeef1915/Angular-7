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
import { FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dynamic-forms-test',
  templateUrl: './dynamic-forms-test.component.html',
  styleUrls: ['./dynamic-forms-test.component.css']
})
export class DynamicFormsTestComponent implements OnInit {
  public fields2: any[] = [];
  public publicDeals: Person[] = [];
  //publicDeals: Array<any> = [];
  public form: FormGroup;
  public fields1: any[] = [
    {
      type: 'text',
      name: 'first_name',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'last_name',
      label: 'Last Name',
      value: '',
      required: true,
    },
  ];
  p_col: any;
  button_label: any;
  // p_col: any [];

  constructor(private httpClient: HttpClient, private http: Http, private formBuilder: FormBuilder,
    private personservice: PersonService) {



  }
  private api_url1 = 'http://localhost/angular7demo/person.php?type=datatable-stuct';
  //private api_url = 'http://localhost/angular7demo/index.php';
  private api_url = 'http://localhost/angular7demo/person.php?type=datatable-test';
  ngOnInit() {


    this.getOtherDetails();
    //this.getFields();

  }

  getFields() {

  console.log('public deAls======');
    // console.log(this.getKeys(this.publicDeals));
   console.log(this.button_label);
    //const p_col = this.getKeys(this.publicDeals);
    return this.publicDeals;
  }
  

  getOtherDetails() {
    return this.personservice.getDatatableDetails()
      .subscribe(persons => {

        console.log(persons);
        this.button_label = persons.button_label;
        // console.log(this.users$);
        persons.FIELDS_FILTERS.forEach(element => {
          this.publicDeals.push(element);
          // console.log(this.publicDeals);
        });

        //this.p_col = this.publicDeals;
        this.form = new FormGroup({
          fields: new FormControl(this.publicDeals)
        });
      });

  }

 


}
