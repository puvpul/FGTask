import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ShipmentService } from './services/shipment.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

@NgModule({
    imports: [BrowserModule, FormsModule,ReactiveFormsModule,HttpModule,routing, ReCaptchaModule ],
    declarations: [AppComponent, RegisterComponent, LoginComponent, ShipmentComponent],
    providers: [ShipmentService,RegisterService,LoginService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
