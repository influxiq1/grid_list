import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmicmaterialgridComponent } from './dynmicmaterialgrid.component';

describe('DynmicmaterialgridComponent', () => {
  let component: DynmicmaterialgridComponent;
  let fixture: ComponentFixture<DynmicmaterialgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynmicmaterialgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynmicmaterialgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
