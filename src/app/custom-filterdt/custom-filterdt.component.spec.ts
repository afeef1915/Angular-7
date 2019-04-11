import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilterdtComponent } from './custom-filterdt.component';

describe('CustomFilterdtComponent', () => {
  let component: CustomFilterdtComponent;
  let fixture: ComponentFixture<CustomFilterdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFilterdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFilterdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
