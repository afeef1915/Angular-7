import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsBootstrapComponent } from './reactive-forms-bootstrap.component';

describe('ReactiveFormsBootstrapComponent', () => {
  let component: ReactiveFormsBootstrapComponent;
  let fixture: ComponentFixture<ReactiveFormsBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
