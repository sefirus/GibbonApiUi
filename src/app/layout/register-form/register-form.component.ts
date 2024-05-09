import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    MatFormField,
    MatError,
    NgIf,
    MatButton,
    MatInput,
    MatLabel
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  user = {
    email: '',
    password: ''
  };
  apiError: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(signUpForm: NgForm): void {
    if (signUpForm.valid) {
      this.userService.registerUser(this.user).subscribe({
        next: (response) => {
          this.apiError = null;
          signUpForm.reset();

          this.router.navigate(['/workspaces']);
        },
        error: (error) => {
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
