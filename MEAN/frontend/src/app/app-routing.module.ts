import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'',component:WelcomeComponent},
  {path:'contact',component:ContactusComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
