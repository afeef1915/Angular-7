import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableServersideComponent } from './datatable-serverside.component';

describe('DatatableServersideComponent', () => {
  let component: DatatableServersideComponent;
  let fixture: ComponentFixture<DatatableServersideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableServersideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableServersideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
