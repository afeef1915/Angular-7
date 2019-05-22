import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dropdown-st',
  templateUrl: './dropdown-st.component.html',
  styleUrls: ['./dropdown-st.component.css']
})
export class DropdownStComponent implements OnInit {
  // @Input() field: any = {};
  //   @Input() form: FormGroup;
  @Input() field: any = {};
  // @Input() form
  constructor() { }

  ngOnInit() {
  }

}
