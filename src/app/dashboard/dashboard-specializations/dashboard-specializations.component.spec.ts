import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpecializationsComponent } from './dashboard-specializations.component';

describe('DashboardSpecializationsComponent', () => {
  let component: DashboardSpecializationsComponent;
  let fixture: ComponentFixture<DashboardSpecializationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSpecializationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
