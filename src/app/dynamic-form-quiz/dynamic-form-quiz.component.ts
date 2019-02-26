import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Quizbase } from '../quizbase';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-dynamic-form-quiz',
  templateUrl: './dynamic-form-quiz.component.html',
  styleUrls: ['./dynamic-form-quiz.component.css'],
  providers: [QuizService]
})
export class DynamicFormQuizComponent implements OnInit {
  @Input() quiz: Quizbase<any>[] =[];
  form: FormGroup;
  payLoad = '';
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.form = this.quizService.toFormGroup(this.quiz);
  }
  
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);

  }

}
