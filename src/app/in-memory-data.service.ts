import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ishwar Mittal' },
      { id: 12, name: 'Mohd Afeef' },
      { id: 13, name: 'Rajat Dixit' },
      { id: 14, name: 'Vineet Tyagi' },
      { id: 15, name: 'AMIT GUpta' },
      { id: 16, name: 'anil gupta' },
      { id: 17, name: 'Brendan' },
      { id: 18, name: 'Jehan' },
      // { id: 19, name: 'Magma' },
      // { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
