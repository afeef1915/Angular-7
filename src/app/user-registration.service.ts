import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import 'rxjs/add/operator/toPromise';
import { MessageService } from './message.service';
import { Userdetails } from './userdetails';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  private insertdataUrl = 'http://localhost/mtl_project/web/app_dev.php/api/v1/register-user';
  private loginUrl = 'http://localhost/mtl_project/web/app_dev.php/api/login_check';
  constructor(private messageService: MessageService, private http: HttpClient) { }

  register(user: Userdetails): Observable<Userdetails> {
    const url = this.insertdataUrl;
    console.log(user);
    return this.http.post<Userdetails>(url, JSON.stringify({ user: user }), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((user: Userdetails) => this.log(`added users id id=${user.id}`)),
      // catchError(this.handleError<Userdetails>('register'))
    );

  }

  login(user: Userdetails): Observable<Userdetails> {
    const url = this.loginUrl;
    return this.http.post<Userdetails>(url, JSON.stringify({ user: user }), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((user: Userdetails) => this.log(`added users id id=${user.id}`)),
      catchError(this.handleError<Userdetails>('login'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }
}
