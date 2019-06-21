import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parents1Component } from './parents1.component';

describe('Parents1Component', () => {
  let component: Parents1Component;
  let fixture: ComponentFixture<Parents1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parents1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parents1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
