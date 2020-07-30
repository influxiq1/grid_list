import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncetimeexampleComponent } from './debouncetimeexample.component';

describe('DebouncetimeexampleComponent', () => {
  let component: DebouncetimeexampleComponent;
  let fixture: ComponentFixture<DebouncetimeexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouncetimeexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncetimeexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
