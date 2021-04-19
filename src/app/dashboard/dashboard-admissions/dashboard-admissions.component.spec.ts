import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmissionsComponent } from './dashboard-admissions.component';

describe('DashboardAdmissionsComponent', () => {
  let component: DashboardAdmissionsComponent;
  let fixture: ComponentFixture<DashboardAdmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
