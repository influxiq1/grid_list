import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloadc2Component } from './lazyloadc2.component';

describe('Lazyloadc2Component', () => {
  let component: Lazyloadc2Component;
  let fixture: ComponentFixture<Lazyloadc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazyloadc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazyloadc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
