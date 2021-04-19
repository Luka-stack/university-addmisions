import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpecializationFormComponent } from './dashboard-specialization-form.component';

describe('DashboardSpecializationFormComponent', () => {
  let component: DashboardSpecializationFormComponent;
  let fixture: ComponentFixture<DashboardSpecializationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSpecializationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSpecializationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
