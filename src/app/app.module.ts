import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelomePageComponent } from './welome-page/welome-page.component';
import { ZillaComponent } from './zilla/zilla.component';
import { FirkirComponent } from './firkir/firkir.component';
import { ZillaNabileComponent } from './zilla-nabile/zilla-nabile.component';
import { FikirTulaComponent } from './fikir-tula/fikir-tula.component';
import { LotusDoorComponent } from './lotus-door/lotus-door.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    DashboardComponent,
    SignupComponent,
    WelomePageComponent,
    ZillaComponent,
    FirkirComponent,
    ZillaNabileComponent,
    FikirTulaComponent,
    LotusDoorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, QRCodeModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
