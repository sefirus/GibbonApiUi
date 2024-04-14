import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {RegisterFormComponent} from "../register-form/register-form.component";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    MatCard, MatCardTitle, MatCardContent, MatFormField, MatLabel, MatError, FormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButton, RegisterFormComponent, MatButtonModule, MatInputModule
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {
  email: string = '';
  password: string = '';
  apiError: string | null = null;

  constructor(private authService: AuthService,
              private router: Router,
              private dialogRef: MatDialogRef<LoginDialogComponent>
) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.dialogRef.close(); // Close the dialog
        this.router.navigate(['/workspaces']);

      },
      error: (error) => {
        console.error('Login failed', error);
        this.apiError = error["error_description"] == "invalid_username_or_password" ? "Invalid username or password" : 'Login failed';
      }
    });
  }
}
