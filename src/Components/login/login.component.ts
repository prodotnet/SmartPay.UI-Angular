import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../../UserAuthService/account.service';
import { take } from 'rxjs';
import { UserDTO } from '../../model/UserDTO';
import { ValidationsComponent } from '../validations/validations.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule,ValidationsComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent  implements OnInit{
  loginForm: FormGroup = new FormGroup({});
 

  submitted = false;
  isRegistered = false;
  isLoading = false;
  errorMessages: string[] = [];

  constructor(
    private userAuthentication: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  )
  { 
   
    this.userAuthentication.user$.pipe(take(1)).subscribe({
      next:(user:UserDTO | null)=>{
        if(user){
          this.router.navigateByUrl('/dashboard');
        }
      }
    })
  
  }



  ngOnInit(): void {
    this.formInitialization();

  }
  
  // Initialize the login form with validation rules
  formInitialization() {
    this.loginForm = this.formBuilder.group({

      email: ['', Validators.required,],
      password: ['', Validators.required],
    });
  }

  
// Login method to authenticate user
  Login() {
    this.submitted = true;
    this.isLoading = true;
    this.errorMessages = [];

    if (this.loginForm.valid) {
      this.userAuthentication.Login(this.loginForm.value).subscribe({
        next: (reponse: any) => {
         
          this.isRegistered = true;
          this.isLoading = false;
          this.router.navigateByUrl('/dashboard');
        },
        error: error => {
          this.isRegistered = false;
          this.isLoading = false;
          console.log(error);

          if (error.error.errors) {
            this.errorMessages = error.error.errors;
          } else {

            this.errorMessages.push(error.error);
          }

        }
      })
    } else {
      this.isLoading = false;
      this.errorMessages.push('Please fill out the form correctly.');
    }
  }

}







