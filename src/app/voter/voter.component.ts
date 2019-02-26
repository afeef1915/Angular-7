import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  @Input()  key:  String;
  @Output() votes =  new EventEmitter<boolean>();
  flags = false;
  constructor() { }

  ngOnInit() {
  }

  vote(agree:  boolean) {
    this.votes.emit(agree);
    this.flags  = true;
  }

}
