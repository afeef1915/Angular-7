import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Quizbase } from './quizbase';
import { QuizService } from './quiz.service';
import { QuizProfileComponent } from './quiz-profile/quiz-profile.component';
import { QuizAdComponent } from './quiz-ad/quiz-ad.component';
import {AddQuiz} from './add-quiz';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuizService]
})
export class AppComponent implements  OnInit {
  title = 'Angular 7 Demo project';
  quiz: any [];
  quizs: AddQuiz[];

  constructor(private quizService: QuizService) {
    this.quiz = quizService.getQuizResults();
    console.log(this.quiz);
    }
   ngOnInit() {
     this.quizs = this.quizService.getAllQuiz();

     console.log(this.quizs);
      console.log('quizes');
   }
}
