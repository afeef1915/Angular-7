import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptordemoComponent } from './interceptordemo.component';

describe('InterceptordemoComponent', () => {
  let component: InterceptordemoComponent;
  let fixture: ComponentFixture<InterceptordemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptordemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptordemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
