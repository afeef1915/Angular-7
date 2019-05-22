import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBuilderDtComponent } from './field-builder-dt.component';

describe('FieldBuilderDtComponent', () => {
  let component: FieldBuilderDtComponent;
  let fixture: ComponentFixture<FieldBuilderDtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldBuilderDtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldBuilderDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
