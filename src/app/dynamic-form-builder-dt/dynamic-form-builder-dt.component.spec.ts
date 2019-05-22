import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormBuilderDtComponent } from './dynamic-form-builder-dt.component';

describe('DynamicFormBuilderDtComponent', () => {
  let component: DynamicFormBuilderDtComponent;
  let fixture: ComponentFixture<DynamicFormBuilderDtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormBuilderDtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormBuilderDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
