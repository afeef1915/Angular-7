import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents1',
  templateUrl: './parents1.component.html',
  styleUrls: ['./parents1.component.css']
})
export class Parents1Component implements OnInit {
   message: string;
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    console.log($event);
    this.message = $event;
  }
}
