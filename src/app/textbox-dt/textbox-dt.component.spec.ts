import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxDtComponent } from './textbox-dt.component';

describe('TextboxDtComponent', () => {
  let component: TextboxDtComponent;
  let fixture: ComponentFixture<TextboxDtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxDtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
