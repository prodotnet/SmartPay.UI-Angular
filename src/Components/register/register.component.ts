import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ValidationsComponent } from '../validations/validations.component';
import { AccountService } from '../../UserAuthService/account.service';

// Bootstrap modal declared so we can use it later
declare var bootstrap: any;

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, CommonModule, ValidationsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})




// Class that defines the behavior of the RegisterComponent
export class RegisterComponent implements OnInit {

  // Form group to handle registration form data and validation
  registrationForm: FormGroup = new FormGroup({});

  // Booleans to control UI behavior and feedback
  submitted = false;
  isRegistered = false;
  isButtonDisabled = false;
  isRegistrationFailed = false;
  isLoading = false;


  // Array to store any error messages from the server
  errorMessages: string[] = [];

  // Constructor to inject required services
  constructor(
    private userAuthentication: AccountService, // Service to handle user registration
    private formBuilder: FormBuilder,           // Used to build the form group
    private router: Router                      // Used for navigation
  ) { }

  // Lifecycle hook runs when the component is initialized
  ngOnInit(): void {
    this.formInitialization(); // Initialize the form with fields and validators
  }


  // Method to define the structure and validation of the form
  formInitialization() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required]], // First name is required
      lastName: ['', [Validators.required]],  // Last name is required
      email: ['', [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]], // Email required and must match pattern
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]], // Password must be between 6-12 characters
    });
  }


  // Method triggered when user submits the registration form
  Registration() {
    this.submitted = true;
    this.isLoading = true;
    this.isButtonDisabled = true;
    this.errorMessages = [];

    // Call register method in the AccountService with form values
    this.userAuthentication.register(this.registrationForm.value).subscribe({
      // If registration is successful
      next: (response) => {
        console.log(response);
        this.isRegistered = true;
        this.isRegistrationFailed = false;
        this.isLoading = false;
      },
      // If registration fails
      error: error => {
        console.log(error);
        this.isRegistrationFailed = true;
        this.isRegistered = false;
        this.isLoading = false;
        this.isButtonDisabled = false;

        // Handle different error formats
        if (error.error.errors) {
          this.errorMessages = error.error.errors;
        } else {
          this.errorMessages.push(error.error);
        }
      },
      // After everything completes, show a modal
      complete: () => {
        const modalElement = document.getElementById('registrationModal');
        if (modalElement) {
          const modal = new bootstrap.Modal(modalElement);
          modal.show();
          this.isButtonDisabled = false;
        }
      }
    });
  }


  // Navigate to the login page
  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  
}
