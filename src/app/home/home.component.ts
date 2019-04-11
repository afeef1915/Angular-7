import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../user';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { HeroService } from '../hero.service';


import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { Pipe, PipeTransform } from '@angular/core';
import { DatapipePipe } from '../datapipe.pipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  dtOptions: DataTables.Settings = {};
  persons: Person[];
  private apiUrl = 'http://localhost/angular7demo/person.php?type=person-datatable';



  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private heroService: HeroService,
    private personservice: PersonService,
    private router: Router,
    private location: Location,

    private http: HttpClient
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });

  }

  ngOnInit() {
    this.loadAllUsers();
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 1,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            //'https://angular-datatables-demo-server.herokuapp.com/',
            this.apiUrl,
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            console.log(that.persons);
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }, { data: 'dateofBirth' }, { data: 'Edit' }, { data: 'Delete' }]

    };
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  //   deleteUser(id: number) {
  //     this.userService.delete(id).pipe(first()).subscribe(() => {
  //         this.loadAllUsers()
  //     });
  // }

  private loadAllUsers() {

    console.log('get all person');
    this.personservice.getPersonMetaData()
      .subscribe(persons => this.persons = persons);
    console.log(this.persons);

    // this.userService.getAll().pipe(first()).subscribe( users => {
    //   this.users = users;
    // });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  viewDetails(selected_id): void {
    console.log('view details function');
    console.log(selected_id);
    this.router.navigate(['/person/edit', selected_id]);
  }
  goBack(): void {
    this.location.back();
  }

  DeleteDetails(persons: Person): void {
    this.personservice.deletePerson(persons)
      .subscribe(data => {
        this.persons = this.persons.filter(u => u !== persons);
        console.log('delte data ');
        confirm('Are You Confirm you want to Delete the Data');
        this.router.navigate(['/person/list']);
        //window.location.reload();
        this.loadAllUsers();
      });
  }
}
