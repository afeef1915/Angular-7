import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  message: string;
  constructor(private data:  DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message  => this.message = message);
  }

}
