import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Person } from './person';
import { MessageService } from './message.service';
import 'rxjs/add/operator/toPromise';


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  //private apiUrl = 'person/list';

  // private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  private apiUrl = 'http://localhost/angular7demo/person.php';


  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  //   getPersonMetaData() - This will call the above "getPersonMetaData()" function
  // addPerson() - post data to above created "addNew()"
  // updatePerson() - post data to the above created "update()"
  // deletePerson() - post data to the above created "delete()" 
  // searchPerson() - post data to the above created "search()"

  getPersonMetaData(): Observable<Person[]> {

    const url = this.apiUrl + '?type=get-person';

    return this.http.get<Person[]>(url)
      .pipe(
      tap(_ => this.log('fetched persons')),
      catchError(this.handleError('getPersonMetaData', []))
      );
  }

  getDatatableDetails(): Observable<any> {
    const url = this.apiUrl + '?type=datatable-stuct';
    return this.http.get<Person[]>(url)
    .pipe(
      tap(_ => this.log('getch datatble data')),
      catchError(this.handleError('getDatatableDetails', []))
    );
  }
  //http://localhost/angular7demo/person.php?type=datatable-stuct

   getDynamicData(): Observable<Person[]> {

    const url = this.apiUrl + '?type=dynamic-fields';
    return this.http.get<Person[]>(url)
      .pipe(
      tap(_ => this.log('fetched dynamic-fields')),
      catchError(this.handleError('getDynamicData', []))
      );
  }

  getPersonById(id: number): Observable<Person> {
    console.log(id);
  
    const url = `${this.apiUrl}/${id}?type=edit-details&id=` + id;
    console.log(url);
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Person>(`getPersonById id=${id}`))
    );
  }

  loadWord(text: string): Observable<Person> {
    console.log('search elemenets');
    console.log(text);
    const url = `${this.apiUrl}?type=search-fields&search=` + text;
    //const url = `http://localhost/angular7demo/person.php?type=search-fields&search=${text}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched hero id=${text}`)),
      catchError(this.handleError<Person>(`loadWord id=${text}`))
    );
    // return Observable.timer(1000)
    //   .switchMap(() => this.http.get<[string, string[]]>(url))
    //   .map(data => data[1]);
  }

  searchData(text: any ): Observable<Person> {

    console.log('datatable seacth ');

    console.log(text);
    const url = `${this.apiUrl}?type=search-datatable-fields`;
    return this.http.post<Person>(url, JSON.stringify({ tablesearch : text }), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((text: Person) => this.log(`added person w/ id=${text}`)),
      catchError(this.handleError<Person>('searchData'))
    );
  
    
  }
  addPerson(person: Person): Observable<Person> {
    // console.log('calkling addPerson service');
    // console.log('person_service datat_json' + person);
    // console.log('person_service datat_json' + JSON.stringify({ person }));
    const url = this.apiUrl + '?type=add-person';
    return this.http.post<Person>(url, JSON.stringify({ person: person }), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((person: Person) => this.log(`added person w/ id=${person.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  updatePerson(person: Person | String): Observable<Person> {
    console.log('update person');
    console.log(person);
    const url = this.apiUrl + '?type=update-details';
    console.log(JSON.stringify(person));

    return this.http.put(url, JSON.stringify({ person: person }), httpOptions).pipe(
      tap(_ => this.log(`updated person id=${person}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }


  deletePerson(delete_id: Person | number): Observable<Person> {

    console.log('delete code');

    console.log(delete_id);

    //const id = typeof person === 'number' ? person : person.id;
    const url = `${this.apiUrl}/${delete_id}?type=delete-person&id=` + delete_id;

    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted person id=${delete_id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

  searchPerson(term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Person[]>(`${this.apiUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found person matching "${term}"`)),
      catchError(this.handleError<Person[]>('searchPerson', []))
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
