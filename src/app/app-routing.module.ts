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
import {QuizBannerComponent} from './quiz-banner/quiz-banner.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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
