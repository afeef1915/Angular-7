import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildexampleComponent } from './viewchildexample.component';

describe('ViewchildexampleComponent', () => {
  let component: ViewchildexampleComponent;
  let fixture: ComponentFixture<ViewchildexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
