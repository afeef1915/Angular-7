import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Injectable} from '@angular/core';

import { QuestionService } from '../question.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:  [QuestionService]
})
@Injectable()
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  @Input() questions: any[];
  constructor(private heroService: HeroService, private  service: QuestionService) {
     this.questions = service.getQuestions();
   }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    console.log(this.heroes);
    console.log(hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}