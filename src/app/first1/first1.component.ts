import { Component, OnInit } from '@angular/core';
import {Data1Service} from '../data1.service';

@Component({
  selector: 'app-first1',
  templateUrl: './first1.component.html',
  styleUrls: ['./first1.component.css']
})
export class First1Component implements OnInit {
  message: string;

  constructor(private data: Data1Service ) { 
    
    this.data.currentMessage.subscribe(message => this.message =   message);
  }

  ngOnInit() {

    this.data.currentMessage.subscribe(message => this.message =   message);
  }

}
