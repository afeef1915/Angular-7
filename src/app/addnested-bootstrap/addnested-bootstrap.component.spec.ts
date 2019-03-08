import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnestedBootstrapComponent } from './addnested-bootstrap.component';

describe('AddnestedBootstrapComponent', () => {
  let component: AddnestedBootstrapComponent;
  let fixture: ComponentFixture<AddnestedBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnestedBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnestedBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
