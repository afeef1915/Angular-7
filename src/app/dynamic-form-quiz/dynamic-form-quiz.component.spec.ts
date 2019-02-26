import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormQuizComponent } from './dynamic-form-quiz.component';

describe('DynamicFormQuizComponent', () => {
  let component: DynamicFormQuizComponent;
  let fixture: ComponentFixture<DynamicFormQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
