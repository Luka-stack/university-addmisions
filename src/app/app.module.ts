import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdmissionComponent } from './admission/admission.component';
import { AdmisionTileComponent } from './admission/admision-tile/admision-tile.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldComponent } from './field-list/field/field.component';
import { FieldCardComponent } from './field-list/field-card/field-card.component';
import { TruncatePipe } from './utilities/truncate.pipe';
import { SpecializationComponent } from './specialization/specialization.component';
import { LogInComponent } from './log-in/log-in.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardAdmissionsComponent } from './dashboard/dashboard-admissions/dashboard-admissions.component';
import { DashboardPageHeaderComponent } from './dashboard/dashboard-page-header/dashboard-page-header.component';
import { DashboardFieldsComponent } from './dashboard/dashboard-fields/dashboard-fields.component';
import { DashboardSpecializationsComponent } from './dashboard/dashboard-specializations/dashboard-specializations.component';
import { DashboardAdmissionFormComponent } from './dashboard/dashboard-admission-form/dashboard-admission-form.component';
import { DashboardSpecializationFormComponent } from './dashboard/dashboard-specialization-form/dashboard-specialization-form.component';
import { DashboardFieldFormComponent } from './dashboard/dashboard-field-form/dashboard-field-form.component';
import { DashboardDashboardComponent } from './dashboard/dashboard-dashboard/dashboard-dashboard.component';
import { DashboardProfileComponent } from './dashboard/dashboard-profile/dashboard-profile.component';
import { ProfilePasswordComponent } from './profile/profile-password/profile-password.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdmissionComponent,
    AdmisionTileComponent,
    HomeComponent,
    FieldComponent,
    FieldListComponent,
    FieldCardComponent,
    TruncatePipe,
    SpecializationComponent,
    LogInComponent,
    ContentLayoutComponent,
    RegistrationComponent,
    DashboardLayoutComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardAdmissionsComponent,
    DashboardPageHeaderComponent,
    DashboardFieldsComponent,
    DashboardSpecializationsComponent,
    DashboardAdmissionFormComponent,
    DashboardSpecializationFormComponent,
    DashboardFieldFormComponent,
    DashboardDashboardComponent,
    DashboardProfileComponent,
    ProfilePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    CarouselModule,
    // FormsModule,
    ReactiveFormsModule,
    EditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
