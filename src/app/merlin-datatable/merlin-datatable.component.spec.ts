import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerlinDatatableComponent } from './merlin-datatable.component';

describe('MerlinDatatableComponent', () => {
  let component: MerlinDatatableComponent;
  let fixture: ComponentFixture<MerlinDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerlinDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerlinDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
