import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisenobservableComponent } from './promisenobservable.component';

describe('PromisenobservableComponent', () => {
  let component: PromisenobservableComponent;
  let fixture: ComponentFixture<PromisenobservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisenobservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisenobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
