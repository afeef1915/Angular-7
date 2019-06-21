import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  private subjectMessage = new BehaviorSubject('default message');

  currentMessage = this.subjectMessage.asObservable();


  constructor() { }

  changeMessage(message: string) {
    this.subjectMessage.next(message);

  }
  
}
