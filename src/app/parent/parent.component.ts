import { Component, OnInit } from '@angular/core';
import { Persons } from '../person';
// import { HEROES } from '../hero';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  per1 = Persons;
  per2 =  ' Parent';
  major = 1;
  minor = 23;
  trues = 0;
  falses = 0;
  //names = ['Anil Gupta', ' ', 'Amit Gupta', 'Rajat'];
  names = ['Mr. IQ', 'Anil Gupta', 'Bombasto'];
  
  constructor() { }

  ngOnInit() {
  }
  newMinor() {
     this.minor++;
  }
  newMajor() {
    this.major++;
    this.minor =  0;
  }

  onVoted(trues: boolean) {
    console.log(trues);
    trues ? this.trues++ : this.falses++;
  }
}
