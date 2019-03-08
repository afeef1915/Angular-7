import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { QuestionService } from '../question.service';
import {Injectable} from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ QuestionService]
})
@Injectable()
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  questions: any[];

  constructor(private heroService: HeroService, private service: QuestionService) {this.questions = service.getQuestions(); }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
