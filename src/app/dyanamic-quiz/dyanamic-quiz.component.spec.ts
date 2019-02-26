import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanamicQuizComponent } from './dyanamic-quiz.component';

describe('DyanamicQuizComponent', () => {
  let component: DyanamicQuizComponent;
  let fixture: ComponentFixture<DyanamicQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyanamicQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanamicQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
