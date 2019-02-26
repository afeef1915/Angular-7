import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProfileComponent } from './quiz-profile.component';

describe('QuizProfileComponent', () => {
  let component: QuizProfileComponent;
  let fixture: ComponentFixture<QuizProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
