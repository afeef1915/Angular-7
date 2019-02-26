import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

import { QuestionBase } from './question-base';
// import { Quizbase} from './quizbase';
import { QuestionService } from './question.service';
import { PersonService } from './person.service';
import { HeroService } from './hero.service';
import { QuizService } from './quiz.service';

import { QuestionControlService } from './question-control.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { PersonComponent } from './person/person.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DatapipePipe } from './datapipe.pipe';
import { SearchPipe } from './search.pipe';
import { AddDynamicComponent } from './add-dynamic/add-dynamic.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder/dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextboxComponent } from './textbox/textbox.component';
import { SearchComponent } from './search/search.component';
import { DyanamicQuizComponent } from './dyanamic-quiz/dyanamic-quiz.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { QuizComponent } from './quiz/quiz.component';
import { DynamicQuizComponent } from './dynamic-quiz/dynamic-quiz.component';
import { DynamicFormQuizComponent } from './dynamic-form-quiz/dynamic-form-quiz.component';
import { QuizDirective } from './quiz.directive';
import { QuizBannerComponent } from './quiz-banner/quiz-banner.component';
import { QuizProfileComponent } from './quiz-profile/quiz-profile.component';
import { QuizAdComponent } from './quiz-ad/quiz-ad.component';
// import { QuiztextboxComponent } from './quiztextbox/quiztextbox.component';
// import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent,
    MessagesComponent,
    ReactiveformsComponent,
    ProfileEditorComponent,
    HeroFormReactiveComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    HeroParentComponent,
    HeroChildComponent,
    AComponentComponent,
    BComponentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    PersonComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    DatapipePipe,
    SearchPipe,
    AddDynamicComponent,
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextboxComponent,
    SearchComponent,
    DyanamicQuizComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioComponent,
    QuizComponent,
    DynamicQuizComponent,
    DynamicFormQuizComponent,
    QuizDirective,
    QuizBannerComponent,
    QuizProfileComponent,
    QuizAdComponent,
    //QuiztextboxComponent,
    // QuestionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // HttpClientModule 
  ],
  // providers: [QuestionBase, QuestionService, QuestionControlService, HeroService, PersonService],
   providers: [ QuestionService, QuestionControlService, HeroService, PersonService, QuizService],
  bootstrap: [AppComponent],
  //  exports: [ QuizProfileComponent, QuizAdComponent ],
  entryComponents: [ QuizProfileComponent, QuizAdComponent ]
  // schemas: [
  //       CUSTOM_ELEMENTS_SCHEMA,
  //       NO_ERRORS_SCHEMA
  //     ]
})
export class AppModule { }
