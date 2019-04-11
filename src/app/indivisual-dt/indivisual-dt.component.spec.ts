import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivisualDtComponent } from './indivisual-dt.component';

describe('IndivisualDtComponent', () => {
  let component: IndivisualDtComponent;
  let fixture: ComponentFixture<IndivisualDtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivisualDtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivisualDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
