import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';
import { Person } from '../person';
import { Hero } from '../hero';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() per1: Person;
  // tslint:disable-next-line:no-input-rename
  @Input('per2') person2Name: string;
  @Input() names:  string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;


  private _name = '';
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no record found>';
  }

  get name(): string {
    return this._name;
  }
  @Input() hero: Hero;

  // tslint:disable-next-line:no-input-rename
  @Input('master') masterName: string;

  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const log: string[] = [];
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
         log.push(`${propName} changed from ${from} to ${to}`);
      }
      this.changeLog.push(log.join(','));
    }
  }

 vote(flags: boolean) {
  this.voted.emit(flags);
  this.didVote =  true;
 }

}
