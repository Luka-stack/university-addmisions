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
    SpecializationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
