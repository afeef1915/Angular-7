import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBannerComponent } from './quiz-banner.component';

describe('QuizBannerComponent', () => {
  let component: QuizBannerComponent;
  let fixture: ComponentFixture<QuizBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
