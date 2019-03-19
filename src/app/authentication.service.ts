import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable , of } from 'rxjs';
import 'rxjs/add/operator/map';
import { User} from './user';

import { Http, Headers, RequestOptions, Response} from '@angular/http';
// import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
      return this.currentUserSubject.value;
   }

   login (username: string , password: string) {
     return this.http.post<any>('/users/authenticate',  { username, password})
     .pipe(map (user => {
              if (user && user.token)  {
                 localStorage.setItem('currentUser',  JSON.stringify(user));
                 this.currentUserSubject.next(user);
              }

     }));
   }
   logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
