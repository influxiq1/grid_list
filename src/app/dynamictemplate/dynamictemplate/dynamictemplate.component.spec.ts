import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamictemplateComponent } from './dynamictemplate.component';

describe('DynamictemplateComponent', () => {
  let component: DynamictemplateComponent;
  let fixture: ComponentFixture<DynamictemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamictemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamictemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
