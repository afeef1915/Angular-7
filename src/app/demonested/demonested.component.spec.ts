import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonestedComponent } from './demonested.component';

describe('DemonestedComponent', () => {
  let component: DemonestedComponent;
  let fixture: ComponentFixture<DemonestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemonestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
