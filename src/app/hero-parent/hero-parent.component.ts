import { Component, OnInit } from '@angular/core';
import { HEROES } from '../hero';
import { HEROS } from '../hero';

// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {
  heroes = HEROES;
  her = HEROS;
  master = 'Called in parent Component';
  // heroes: Hero[] = [];
  constructor() { }

  ngOnInit() {
  }

}
