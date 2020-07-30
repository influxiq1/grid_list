import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloadc1Component } from './lazyloadc1.component';

describe('Lazyloadc1Component', () => {
  let component: Lazyloadc1Component;
  let fixture: ComponentFixture<Lazyloadc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazyloadc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazyloadc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
