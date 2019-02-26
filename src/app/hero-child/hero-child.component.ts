import { Component, OnInit, Input,Injectable} from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
@Injectable()
export class HeroChildComponent implements OnInit {
  @Input() hero: Hero;
  @Input('master') masterName: string;
  @Input() heros: Hero;
  constructor() { }

  ngOnInit() {
  }

}
