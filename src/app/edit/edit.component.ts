import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // persons: Person[];
  // api_data: Person;
  model: any = {};
  // profileForm: FormGroup;
  getelementid: Number;
  user: Observable<Person>;
  // first_name: string;
  // last_name: string;
  // date_of_birth: date;
  // @Input() persons: Person;
  @Input() name: Person;
  // @Input() last_name: Person;
  // @Input() date_of_birth: Person;
submitted = false;
  editprofileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: ['', Validators.required]
  });

  // forms = new FormControl('');
  constructor(private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location, private router: Router, private fb: FormBuilder) { }




  ngOnInit() {
    this.retrivePersonDetails();

  }
   get f() { return this.editprofileForm.controls; }
  retrivePersonDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.personService.getPersonById(id)
      .subscribe(name => this.name = name[0]


      );
    // console.log('name');
    // console.log(name);
    // console.log('thisname');
    // console.log(this.name);
    // console.log('cate data');
    // console.log(JSON.stringify(name)) ;

  }


  goBack(): void {
    this.location.back();
  }


  updatePersons(): void {

     this.submitted = true;

    // stop here if form is invalid
    if (this.editprofileForm.invalid) {
      return;
    } else {
      //  if (!this.editprofileForm.value) { return; }
      // this.personservice.addPerson(this.profileForm.value)
      //   .subscribe(per => {
      //     this.persons.push(per);

      //   });
       const id = +this.route.snapshot.paramMap.get('id');
    // console.log('get id =>');
    // console.log(id);
    const get_id = {'id': id};
    const send_json = this.editprofileForm.value;
    const update_json =  Object.assign(send_json, get_id);
    this.personService.updatePerson(update_json)
      .subscribe(() => this.goBack());
      alert(' Data Updated');
      // this.router.navigate(['/person/list']);
    }
}

 
}
