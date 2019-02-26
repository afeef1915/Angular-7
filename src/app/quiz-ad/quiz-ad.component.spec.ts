import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAdComponent } from './quiz-ad.component';

describe('QuizAdComponent', () => {
  let component: QuizAdComponent;
  let fixture: ComponentFixture<QuizAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
