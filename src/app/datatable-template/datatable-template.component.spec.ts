import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableTemplateComponent } from './datatable-template.component';

describe('DatatableTemplateComponent', () => {
  let component: DatatableTemplateComponent;
  let fixture: ComponentFixture<DatatableTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
