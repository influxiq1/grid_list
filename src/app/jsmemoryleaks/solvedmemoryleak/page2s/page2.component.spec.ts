import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2sComponent } from './page2.component';

describe('Page2Component', () => {
  let component: Page2sComponent;
  let fixture: ComponentFixture<Page2sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page2sComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
