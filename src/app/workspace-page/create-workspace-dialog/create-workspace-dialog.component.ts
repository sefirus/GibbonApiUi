import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-create-workspace-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-workspace-dialog.component.html',
  styleUrl: './create-workspace-dialog.component.css'
})
export class CreateWorkspaceDialogComponent {
  workspaceName: string = '';
  apiError: string = '';

  constructor(private http: HttpClient,
              private router: Router,
              private dialogRef: MatDialogRef<CreateWorkspaceDialogComponent>) {}

  createWorkspace(): void {
    this.http.post(`${environment.apiBaseUrl}/workspaces`, { name: this.workspaceName })
      .subscribe({
        next: (response: any) => {
          this.router.navigate([`/workspace-management/${response.name}`]);
          this.dialogRef.close();
        },
        error: (errorResponse) => {
          this.apiError = errorResponse.error?.error || 'Unknown error occurred';
        }
      });
  }
}
