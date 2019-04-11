import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { QuestionService } from '../question.service';
import {Injectable} from '@angular/core';
import { QuestionService } from '../question.service';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

import {Person} from '../person';

import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

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
  api: Person[] = [];
  currentUser: User;
  private heroesUrl = 'http://localhost/mtl_project/web/app_dev.php/api/v1/all-product';
  constructor(private heroService: HeroService, 
    private service: QuestionService,
    private router: Router,
    private http: Http,
     private authenticationService:
     AuthenticationService ) {this.questions = service.getQuestions(); 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    //this.getHeroes();
    this.http.get(this.heroesUrl)
      .map(this.extractData)
      .subscribe(api => {
        this.api = api;
        // Calling the DT trigger to manually render the table
        //this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    //console.log(body.name);
    return body;
  }
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  // }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
