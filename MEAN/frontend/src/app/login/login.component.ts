import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    public loginForm !: FormGroup;
    constructor(private formbuilder:FormBuilder, private http : HttpClient, private router: Router){}
    ngOnInit(): void {
    this.loginForm = new FormGroup({
   'email': new FormControl('',[Validators.required,Validators.email]),
   'password': new FormControl('',[Validators.required,Validators.minLength(8)])
}

)}
get email(): FormControl{

  return this.loginForm.get('email') as FormControl;
  
}
get password(): FormControl{

  return this.loginForm.get('password') as FormControl;
  
 }
}
