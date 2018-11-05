import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent2Component } from './view-component2.component';

describe('ViewComponent2Component', () => {
  let component: ViewComponent2Component;
  let fixture: ComponentFixture<ViewComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
