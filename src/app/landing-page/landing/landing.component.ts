import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../core/user.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatCard, MatCardTitle, MatCardContent, MatFormField, MatLabel, MatError, FormsModule,     MatFormFieldModule, MatInputModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  user = {
    email: '',
    password: ''
  };
  apiError: string | null = null;

  constructor(private userService: UserService) { }

  onSubmit(signUpForm: NgForm): void {
    if (signUpForm.valid) {
      this.userService.registerUser(this.user).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          // Handle success response, maybe redirect or clear the form
          this.apiError = null;
          signUpForm.reset();
        },
        error: (error) => {
          console.error('Registration failed', error);
          // Extract and show error message from response
          this.apiError = error.error.message || 'Registration failed';
        }
      });
    }
  }

  getEmailErrorMessage(email: any): string {
    if (email.errors?.required) {
      return 'Email is required';
    } else if (email.errors?.email) {
      return 'Not a valid email';
    }
    return '';
  }

  getPasswordErrorMessage(password: any): string {
    if (password.errors?.required) {
      return 'Password is required';
    } else if (password.errors?.minlength) {
      return 'Password must be at least 6 characters long';
    }
    return '';
  }
}
