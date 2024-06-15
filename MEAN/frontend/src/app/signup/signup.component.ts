import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  
  public signupForm !: FormGroup;
  constructor(private formbuilder:FormBuilder, private http : HttpClient, private router: Router){}
     ngOnInit(): void {
     this.signupForm = new FormGroup({
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',[Validators.required,Validators.minLength(8)])
}
)}
get name(): FormControl{
  return this.signupForm.get('name') as FormControl;
}
get email(): FormControl{
return this.signupForm.get('email') as FormControl;
}
get password(): FormControl{

return this.signupForm.get('password') as FormControl;

}
}
