import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableexampleComponent } from './datatableexample.component';

describe('DatatableexampleComponent', () => {
  let component: DatatableexampleComponent;
  let fixture: ComponentFixture<DatatableexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
