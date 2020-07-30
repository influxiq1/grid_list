import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeuntilexampleComponent } from './takeuntilexample.component';

describe('TakeuntilexampleComponent', () => {
  let component: TakeuntilexampleComponent;
  let fixture: ComponentFixture<TakeuntilexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeuntilexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeuntilexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
