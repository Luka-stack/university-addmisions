import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { DashboardAdmissionFormComponent } from './dashboard/dashboard-admission-form/dashboard-admission-form.component';
import { DashboardAdmissionsComponent } from './dashboard/dashboard-admissions/dashboard-admissions.component';
import { DashboardDashboardComponent } from './dashboard/dashboard-dashboard/dashboard-dashboard.component';
import { DashboardFieldFormComponent } from './dashboard/dashboard-field-form/dashboard-field-form.component';
import { DashboardFieldsComponent } from './dashboard/dashboard-fields/dashboard-fields.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { DashboardProfileComponent } from './dashboard/dashboard-profile/dashboard-profile.component';
import { DashboardSpecializationFormComponent } from './dashboard/dashboard-specialization-form/dashboard-specialization-form.component';
import { DashboardSpecializationsComponent } from './dashboard/dashboard-specializations/dashboard-specializations.component';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldComponent } from './field-list/field/field.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfilePasswordComponent } from './profile/profile-password/profile-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { SpecializationComponent } from './specialization/specialization.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: ContentLayoutComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'admissions', component: AdmissionComponent },
    { path: 'fields', component: FieldListComponent },
    { path: 'fields/:name', component: FieldComponent },
    { path: 'specializations/:name', component: SpecializationComponent },
    { path: 'profil/password', component: ProfilePasswordComponent }
  ]},

  { path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardLayoutComponent, children: [
    { path: 'home', component: DashboardDashboardComponent },
    { path: 'profil', component: DashboardProfileComponent },
    { path: 'admissions', component: DashboardAdmissionsComponent },
    { path: 'admissions/new', component: DashboardAdmissionFormComponent },
    { path: 'admissions/:id', component: DashboardAdmissionFormComponent },
    
    { path: 'fields', component: DashboardFieldsComponent },
    { path: 'fields/new', component: DashboardFieldFormComponent },
    { path: 'fields/:id', component: DashboardFieldFormComponent },

    { path: 'specializations', component: DashboardSpecializationsComponent },
    { path: 'specializations/new', component: DashboardSpecializationFormComponent },
    { path: 'specializations/:id', component: DashboardSpecializationFormComponent }
  ]},

  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
