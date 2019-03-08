import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.css']
})
export class Select2Component implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public options: Select2Options;
  public value: string[];
  public current: string;

  constructor() { }

  ngOnInit() {
    this.exampleData =  [
        {
          id: 'basic1',
          text: 'basic 1'
        },
        {
          id: 'basic2',
          text: 'basic 2'
        },
        {
          id: 'basic3',
          text: 'basic 3'
        },
        {
          id: 'basic4',
          disabled: true,
          text: 'basic 4'
        }
    ];
    this.value = ['multiple2', 'multiple4'];
    this.options  = {
        multiple: true,
        theme: 'classic',
        closeOnSelect: false
    };
    this.current = this.value.join('|');

  }

  changed(data: { value: string[]}) {
    this.current = data.value.join(' | ');
  }
}
