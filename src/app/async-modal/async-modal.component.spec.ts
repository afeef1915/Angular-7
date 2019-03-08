import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncModalComponent } from './async-modal.component';

describe('AsyncModalComponent', () => {
  let component: AsyncModalComponent;
  let fixture: ComponentFixture<AsyncModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
