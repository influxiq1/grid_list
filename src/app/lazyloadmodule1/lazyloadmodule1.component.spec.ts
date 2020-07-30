import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloadmodule1Component } from './lazyloadmodule1.component';

describe('Lazyloadmodule1Component', () => {
  let component: Lazyloadmodule1Component;
  let fixture: ComponentFixture<Lazyloadmodule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazyloadmodule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazyloadmodule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
