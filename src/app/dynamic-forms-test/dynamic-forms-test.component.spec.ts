import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsTestComponent } from './dynamic-forms-test.component';

describe('DynamicFormsTestComponent', () => {
  let component: DynamicFormsTestComponent;
  let fixture: ComponentFixture<DynamicFormsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
