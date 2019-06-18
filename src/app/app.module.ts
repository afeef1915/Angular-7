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
// import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {JwtInterceptor} from './jwt-interceptor';
import {ErrorInterceptor} from './error-interceptor';
// import { BackendInterceptor } from './backend-interceptor';

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
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';

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
import { AddBootsrapComponent } from './add-bootsrap/add-bootsrap.component';
import { ModalContentComponent } from './add-bootsrap/add-bootsrap.component';
import { AddnestedBootstrapComponent } from './addnested-bootstrap/addnested-bootstrap.component';
import { DemonestedComponent } from './demonested/demonested.component';
import { TypeaheadDemoComponent } from './typeahead-demo/typeahead-demo.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AsyncModalComponent } from './async-modal/async-modal.component';
import { ReactiveFormsBootstrapComponent } from './reactive-forms-bootstrap/reactive-forms-bootstrap.component';
import { AddPersonBootrapComponent } from './add-person-bootrap/add-person-bootrap.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ViewchildexampleComponent } from './viewchildexample/viewchildexample.component';
// import { DemoModalServiceNestedComponent } from './add-bootsrap/add-bootsrap.component';

// import { QuiztextboxComponent } from './quiztextbox/quiztextbox.component';
// import { QuestionComponent } from './question/question.component';
import { DataTablesModule } from 'angular-datatables';
import { DatatableexampleComponent } from './datatableexample/datatableexample.component';

import { Select2Component } from './select2/select2.component';
import { Select2Module } from 'ng2-select2';
import { DatatableServersideComponent } from './datatable-serverside/datatable-serverside.component';
import { AjaxtestComponent } from './ajaxtest/ajaxtest.component';
import { ParentsComponent } from './parents/parents.component';
import { SiblingComponent } from './sibling/sibling.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';

 import {MyInterceptor} from './my-interceptor';
import { InterceptordemoComponent } from './interceptordemo/interceptordemo.component';
import { fakeBackendProvider } from './fake-backend';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './authguard';
import { CustomFilterdtComponent } from './custom-filterdt/custom-filterdt.component';
import { IndivisualDtComponent } from './indivisual-dt/indivisual-dt.component';
import { MerlinDatatableComponent } from './merlin-datatable/merlin-datatable.component';
import { DatatableTemplateComponent } from './datatable-template/datatable-template.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ViewTableComponent } from './view-table/view-table.component';

import { TextboxDtComponent } from './textbox-dt/textbox-dt.component';
import { DynamicFormBuilderDtComponent } from './dynamic-form-builder-dt/dynamic-form-builder-dt.component';
import { FieldBuilderDtComponent } from './field-builder-dt/field-builder-dt.component';
import { DropdownStComponent } from './dropdown-st/dropdown-st.component';
import { MerlinDatatbleServersideComponent } from './merlin-datatble-serverside/merlin-datatble-serverside.component';
import { SearchDynamicComponent } from './search-dynamic/search-dynamic.component';
import { DynamicFormsTestComponent } from './dynamic-forms-test/dynamic-forms-test.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
    AddBootsrapComponent,
    ModalContentComponent,
    AddnestedBootstrapComponent,
    DemonestedComponent,
    TypeaheadDemoComponent,
    AsyncModalComponent,
    ReactiveFormsBootstrapComponent,
    AddPersonBootrapComponent,
    ChildComponent,
    ParentComponent,
    ViewchildexampleComponent,
    DatatableexampleComponent,
    Select2Component,
    DatatableServersideComponent,
    AjaxtestComponent,
    ParentsComponent,
    SiblingComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    InterceptordemoComponent,
    HomeComponent,
    CustomFilterdtComponent,
    IndivisualDtComponent,
    MerlinDatatableComponent,
    DatatableTemplateComponent,
    DynamicTableComponent,
    ViewTableComponent,
    //DatattableTextboxComponent,
    //TableDtComponent,
    TextboxDtComponent,
    DynamicFormBuilderDtComponent,
    FieldBuilderDtComponent,
    DropdownStComponent,
    MerlinDatatbleServersideComponent,
    SearchDynamicComponent,
    DynamicFormsTestComponent
    //DemoModalServiceNestedComponent

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
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    DataTablesModule,
    Select2Module,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  // providers: [QuestionBase, QuestionService, QuestionControlService, HeroService, PersonService],
   providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: MyInterceptor,
  //   multi: true
  // },
  // fakeBackendProvider,
   provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true },
  
  AuthGuard,
  QuestionService, QuestionControlService, HeroService, PersonService, QuizService, BsModalService],
  bootstrap: [AppComponent],
  //  exports: [ QuizProfileComponent, QuizAdComponent ],
  entryComponents: [QuizProfileComponent, QuizAdComponent, ModalContentComponent]
  // schemas: [
  //       CUSTOM_ELEMENTS_SCHEMA,
  //       NO_ERRORS_SCHEMA
  //     ]
})
export class AppModule { }
