import { Component, NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ 
    AppComponent,
    SignupComponent,
    WelcomeComponent,
    ContactusComponent,
    CheckoutComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
