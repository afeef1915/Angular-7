import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonBootrapComponent } from './add-person-bootrap.component';

describe('AddPersonBootrapComponent', () => {
  let component: AddPersonBootrapComponent;
  let fixture: ComponentFixture<AddPersonBootrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonBootrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonBootrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
