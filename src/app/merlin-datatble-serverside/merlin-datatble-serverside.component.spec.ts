import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerlinDatatbleServersideComponent } from './merlin-datatble-serverside.component';

describe('MerlinDatatbleServersideComponent', () => {
  let component: MerlinDatatbleServersideComponent;
  let fixture: ComponentFixture<MerlinDatatbleServersideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerlinDatatbleServersideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerlinDatatbleServersideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
