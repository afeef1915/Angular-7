import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxtestComponent } from './ajaxtest.component';

describe('AjaxtestComponent', () => {
  let component: AjaxtestComponent;
  let fixture: ComponentFixture<AjaxtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
