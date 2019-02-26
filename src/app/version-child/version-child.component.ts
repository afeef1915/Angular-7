import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  // constructor() { }

  // ngOnInit() {
  // }

  // ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  //   let log: String[] = [];

  //   for (let propName in changes) {
  //     let changedProp = changes[propName];
  //     let to = JSON.stringify(chnagedProp.currentValue);
  //     if (changedProp.isFirstChange()) {
  //       log.push('Initial Value of ${propName} set to ${to} ');
  //     }
  //     else {
  //       let from JSON.stringify(changedProp.previousValue);
  //       log.push('Initial Value of ${propName} set to ${to} ');
  //     }
  //   }

  // }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
