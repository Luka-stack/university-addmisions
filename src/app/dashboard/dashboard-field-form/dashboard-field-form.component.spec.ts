import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFieldFormComponent } from './dashboard-field-form.component';

describe('DashboardFieldFormComponent', () => {
  let component: DashboardFieldFormComponent;
  let fixture: ComponentFixture<DashboardFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFieldFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
