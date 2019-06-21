import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
// import {QuestionComponent} from './question/question.component';
// import {HeroparentComponent}  from './reactiveforms/reactiveforms.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VotetakerComponent } from './votetaker/votetaker.component';

import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';

import { AddDynamicComponent } from './add-dynamic/add-dynamic.component';
import { PersonComponent } from './person/person.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { QuizBannerComponent } from './quiz-banner/quiz-banner.component';
import { AddBootsrapComponent } from './add-bootsrap/add-bootsrap.component';
import { AddnestedBootstrapComponent } from './addnested-bootstrap/addnested-bootstrap.component';
import { DemonestedComponent } from './demonested/demonested.component';
import { TypeaheadDemoComponent } from './typeahead-demo/typeahead-demo.component';
import { AsyncModalComponent } from './async-modal/async-modal.component';
import { ReactiveFormsBootstrapComponent } from './reactive-forms-bootstrap/reactive-forms-bootstrap.component';
import { ParentComponent } from './parent/parent.component';
import { ViewchildexampleComponent } from './viewchildexample/viewchildexample.component';
import { DatatableexampleComponent } from './datatableexample/datatableexample.component';
import { Select2Component } from './select2/select2.component';
import { DatatableServersideComponent } from './datatable-serverside/datatable-serverside.component';
import { AjaxtestComponent } from './ajaxtest/ajaxtest.component';
import { ParentsComponent } from './parents/parents.component';
import { SiblingComponent } from './sibling/sibling.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InterceptordemoComponent } from './interceptordemo/interceptordemo.component';
import { AuthGuard } from './authguard';
import { HomeComponent } from './home/home.component';
import { CustomFilterdtComponent } from './custom-filterdt/custom-filterdt.component';
import { IndivisualDtComponent } from './indivisual-dt/indivisual-dt.component';
import { MerlinDatatableComponent } from './merlin-datatable/merlin-datatable.component';
import { DatatableTemplateComponent } from './datatable-template/datatable-template.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { MerlinDatatbleServersideComponent} from './merlin-datatble-serverside/merlin-datatble-serverside.component';
import {DynamicFormsTestComponent} from './dynamic-forms-test/dynamic-forms-test.component';
import {Parents1Component} from './parents1/parents1.component';
const routes: Routes = [

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'reactive-forms', component: ReactiveformsComponent },
  // { path: 'question', component: QuestionComponent }
  { path: 'component-interaction', component: HeroParentComponent },
  { path: 'intercept-input', component: NameParentComponent },
  { path: 'intercept-versioninput', component: VersionParentComponent },
  { path: 'vote', component: VotetakerComponent },
  { path: 'count-down', component: CountdownParentComponent },
  { path: 'person/list', component: PersonComponent },
  { path: 'person/add', component: AddComponent },
  { path: 'person/edit/:id', component: EditComponent },
  { path: 'person/add-dynamic', component: AddDynamicComponent },
  // { path: 'person/list', component: ListComponent }
  { path: 'dynamic-component', component: QuizBannerComponent },
  { path: 'bootsrap', component: AddBootsrapComponent },
  { path: 'nested-bootsrap', component: AddnestedBootstrapComponent },
  { path: 'nested-modal', component: DemonestedComponent },
  { path: 'typehead-demo', component: TypeaheadDemoComponent },
  { path: 'async-modal', component: AsyncModalComponent },
  { path: 'reactive-bootstrap', component: ReactiveFormsBootstrapComponent },
  { path: 'component-inhr', component: ParentComponent },
  { path: 'viewchild-example', component: ViewchildexampleComponent },
  { path: 'datatable-example', component: DatatableexampleComponent },
  { path: 'select2-demo', component: Select2Component },
  { path: 'serverside-dt', component: DatatableServersideComponent },
  { path: 'ajax-test', component: AjaxtestComponent },
  { path: 'communication-parent', component: ParentsComponent },
  { path: 'communication-child', component: SiblingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'interceptor-demo', component: InterceptordemoComponent },
  { path: 'customfilter-dt', component: CustomFilterdtComponent },
  { path: 'indivisaulfilter-dt', component: IndivisualDtComponent },
  { path: 'merlin-dt', component: MerlinDatatableComponent },
  { path: 'datatable-template', component: DatatableTemplateComponent },
  { path: 'dynamic-table', component: DynamicTableComponent },
  { path: 'view-table', component: ViewTableComponent },
  { path : 'merlin-dts', component: DatatableServersideComponent},
  { path : 'merlin-dtc', component: MerlinDatatbleServersideComponent},
  {path : 'test-dynamic-filters', component: DynamicFormsTestComponent},
  { path : 'parent1', component: Parents1Component},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  // imports: [
  //   CommonModule
  // ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
