import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Quizbase } from './quizbase';
import { QuizService } from './quiz.service';
import { QuizProfileComponent } from './quiz-profile/quiz-profile.component';
import { QuizAdComponent } from './quiz-ad/quiz-ad.component';
import { AddQuiz } from './add-quiz';

import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuizService]
})
export class AppComponent implements OnInit {
  title = 'Angular 7 Demo project';
  quiz: any[];
  quizs: AddQuiz[];
  currentUser: User;

  constructor(private quizService: QuizService, private router: Router, private authenticationService: AuthenticationService) {
    this.quiz = quizService.getQuizResults();
    console.log(this.quiz);
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() {
    this.quizs = this.quizService.getAllQuiz();

    console.log(this.quizs);
    console.log('quizes');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
