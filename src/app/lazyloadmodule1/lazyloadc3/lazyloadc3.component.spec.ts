import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloadc3Component } from './lazyloadc3.component';

describe('Lazyloadc3Component', () => {
  let component: Lazyloadc3Component;
  let fixture: ComponentFixture<Lazyloadc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazyloadc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazyloadc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
