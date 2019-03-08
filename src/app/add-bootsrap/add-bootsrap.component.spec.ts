import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBootsrapComponent } from './add-bootsrap.component';

describe('AddBootsrapComponent', () => {
  let component: AddBootsrapComponent;
  let fixture: ComponentFixture<AddBootsrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBootsrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBootsrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
