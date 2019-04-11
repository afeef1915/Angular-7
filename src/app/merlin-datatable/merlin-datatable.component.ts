
import { AfterViewInit, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
  selector: 'app-merlin-datatable',
  templateUrl: './merlin-datatable.component.html',
  styleUrls: ['./merlin-datatable.component.css']
})
export class MerlinDatatableComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  private apiUrl = 'http://localhost/angular7demo/person.php?type=get-person1';
  Search$: Observable<Person>;
  dtOptions: any = {};
  constructor(private personservice: PersonService, private httpClient: HttpClient) { }
  send_data_service: any = {};

  ngOnInit(): void {

    // $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
    //   //const id = parseFloat(data[0]) || 0; // use data for the id column

    //   console.log(data);
    //   // if ((isNaN(this.min) && isNaN(this.max)) ||
    //   //   (isNaN(this.min) && id <= this.max) ||
    //   //   (this.min <= id && isNaN(this.max)) ||
    //   //   (this.min <= id && id <= this.max)) {
    //   //   return true;
    //   // }
    //   // return false;
    // });

    this.dtOptions = {
      ajax: this.apiUrl,
      columns: [{
        title: 'id',
        data: 'id'
      }, {
        title: 'first_name',
        data: 'first_name'
      }, {
        title: 'last_name',
        data: 'last_name',
      },
      {
        title: 'date_of_birth',
        data: 'date_of_birth',
      },
      ]

    };
  }

  ngOnDestroy(): void {
    // We remove the last function in the global ext search array so we do not add the fn each time the component is drawn
    // /!\ This is not the ideal solution as other components may add other search function in this array, so be careful when
    // handling this global variable
    $.fn['dataTable'].ext.search.pop();
  }

  filterById(event: any) {
    console.log('trying to saerch data in filters');
    // onst inputValue = event.target.value;
    

    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const f_name = event.target.f_name.value;
    const l_name = event.target.l_name.value;
   
    this.send_data_service = { 'first_name': first_name, 'last_name': last_name, 'f_name': f_name, 'l_name': l_name };

   // console.log(send_data_service);
  
    this.personservice.searchData(this.send_data_service)
    .subscribe(data => 
      this.send_data_service = data);
     
      // this.personservice.getPersonMetaData()
      // .subscribe(persons => this.persons = persons);
   
    //this.personservice.searchData(this.send_data_service).subscribe()
    // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   dtInstance.draw();
    // });
  }
}
