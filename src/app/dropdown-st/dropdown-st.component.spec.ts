import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownStComponent } from './dropdown-st.component';

describe('DropdownStComponent', () => {
  let component: DropdownStComponent;
  let fixture: ComponentFixture<DropdownStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
