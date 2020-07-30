import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1sComponent } from './page1s.component';

describe('Page1Component', () => {
  let component: Page1sComponent;
  let fixture: ComponentFixture<Page1sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page1sComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
