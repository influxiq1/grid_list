import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasmemoryleakComponent } from './hasmemoryleak.component';

describe('HasmemoryleakComponent', () => {
  let component: HasmemoryleakComponent;
  let fixture: ComponentFixture<HasmemoryleakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasmemoryleakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasmemoryleakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
