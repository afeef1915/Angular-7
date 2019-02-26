import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';

import { FormBuilder } from '@angular/forms';

import { FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [PersonService]
})
export class AddComponent implements OnInit {
  model: any = {};
  submitted = false;

  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(6)]],
    lastName: ['', [Validators.required, Validators.minLength(6)]],
    dateOfBirth: ['', Validators.required]
  });


  constructor(private router: Router, private location: Location, private personservice: PersonService, private fb: FormBuilder) { }
  persons: Person[];
  ngOnInit() {
  }


  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    } else {
       if (!this.profileForm.value) { return; }
      this.personservice.addPerson(this.profileForm.value)
        .subscribe(per => {
          this.persons.push(per);

        });
      alert('Saved Data');
      this.router.navigate(['/person/list']);
    }
  }

  // addPersons(name: string): void {
  //   name = this.profileForm.value;
  //   console.log(name);
  //   if (!name) { return; }
  //   this.personservice.addPerson(this.profileForm.value)
  //     .subscribe(per => {
  //       this.persons.push(per);

  //     });
  //      this.router.navigate(['/person/list']);
  // }

  goBack(): void {
    this.location.back();
  }
  revert(): void {
    this.profileForm.reset();
  }
}
