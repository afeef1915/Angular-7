import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AddQuiz } from '../add-quiz';
import { QuizDirective } from '../quiz.directive';
import { QuizComponent } from '../quiz.component';
import { QuizService } from '../quiz.service';

import { NgModule } from '@angular/core';
import { QuizProfileComponent } from '../quiz-profile/quiz-profile.component';
import { QuizAdComponent } from '../quiz-ad/quiz-ad.component';

@Component({
  selector: 'app-quiz-banner',
  templateUrl: './quiz-banner.component.html',
  styleUrls: ['./quiz-banner.component.css'],
  providers: [QuizService]
})
// @NgModule({
//  entryComponents: [ QuizProfileComponent, QuizAdComponent ],
// })
export class QuizBannerComponent implements OnInit, OnDestroy {
  @Input() quizs: AddQuiz[];
  currIndex = -1;
  currentAdIndex = -1;
  @ViewChild(QuizDirective) adQuiz: QuizDirective;
  interval: any;
  // quizes: AddQuiz[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private quizService: QuizService) { }

  ngOnInit() {
    this.loadQuizComponent();
    this.getQuiz();
    //  this.quizes = this.quizService.getAllQuiz();

    //  console.log(this.quizes);

  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadQuizComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.quizs.length;
    const adItem = this.quizs[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adQuiz.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<QuizComponent>componentRef.instance).data = adItem.data;
  }


  // loadQuizComponent() {
  //   this.currIndex = (this.currIndex + 1) % this.quiz.length;
  //   const qu = this.quiz[this.currIndex];
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(qu.component);
  //   const viewContainerRef = this.adQuiz.viewContainerRef;
  //   viewContainerRef.clear();

  //   const componenetRef = viewContainerRef.createComponent(componentFactory);
  //   (<QuizComponent>componenetRef.instance).data = qu.data;
  // }

  // }
  getQuiz() {
    this.interval = setInterval(() => {
      this.loadQuizComponent();
    }, 3000
    );
  }
}
