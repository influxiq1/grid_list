import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleoftrackbyComponent } from './exampleoftrackby.component';

describe('ExampleoftrackbyComponent', () => {
  let component: ExampleoftrackbyComponent;
  let fixture: ComponentFixture<ExampleoftrackbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleoftrackbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleoftrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
