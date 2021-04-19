import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmissionFormComponent } from './dashboard-admission-form.component';

describe('DashboardAdmissionFormComponent', () => {
  let component: DashboardAdmissionFormComponent;
  let fixture: ComponentFixture<DashboardAdmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdmissionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
