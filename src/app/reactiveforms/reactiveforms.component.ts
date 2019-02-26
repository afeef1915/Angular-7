import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 //favoriteColorControl = new FormControl('');
  name =new FormControl('');
  updateforms()
  {
    this.name.setValue('Afeef');
  }
}
