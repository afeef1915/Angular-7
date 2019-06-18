import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDynamicComponent } from './search-dynamic.component';

describe('SearchDynamicComponent', () => {
  let component: SearchDynamicComponent;
  let fixture: ComponentFixture<SearchDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
