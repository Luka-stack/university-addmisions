import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldComponent } from './field-list/field/field.component';
import { HomeComponent } from './home/home.component';
import { SpecializationComponent } from './specialization/specialization.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admissions', component: AdmissionComponent },
  { path: 'fields', component: FieldListComponent },
  { path: 'fields/:name', component: FieldComponent },
  { path: 'specializations/:name', component: SpecializationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
