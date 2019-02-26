import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Quizbase } from '../quizbase';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-dyanamic-quiz',
  templateUrl: './dyanamic-quiz.component.html',
  styleUrls: ['./dyanamic-quiz.component.css']
})
export class DyanamicQuizComponent implements OnInit {
 
  @Input() quiz: Quizbase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.quiz.key].valid; }

  constructor() { }

  ngOnInit() {
  }

}
