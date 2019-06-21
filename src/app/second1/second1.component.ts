import { Component, OnInit } from '@angular/core';
import {Data1Service} from '../data1.service';

@Component({
  selector: 'app-second1',
  templateUrl: './second1.component.html',
  styleUrls: ['./second1.component.css']
})
export class Second1Component implements OnInit {
  message: string;
  constructor(private data: Data1Service) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage('Hello from Second Component');
  }

}
