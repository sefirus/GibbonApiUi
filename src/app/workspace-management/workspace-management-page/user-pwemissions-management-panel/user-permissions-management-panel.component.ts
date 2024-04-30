import {Component, Input} from '@angular/core';
import {WorkspaceResponse} from "../../../core/models/WorkspaceResponse";
import {UserPermissionsItemComponent} from "../user-permissions-item/user-permissions-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {Permission} from "../../../core/models/Permission";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

type UserRole = 'General' | 'Admin' | 'Owner';

const roleMapping: { [key in UserRole]: string } = {
  'General': 'General',
  'Admin': 'Admin',
  'Owner': 'Owner'
};

@Component({
  selector: 'app-user-pwemissions-management-panel',
  standalone: true,
  imports: [
    UserPermissionsItemComponent,
    NgForOf,
    MatFormField,
    MatSelect,
    MatOption,
    FormsModule,
    MatInput,
    MatButton,
    NgIf,
    MatLabel
  ],
  templateUrl: './user-permissions-management-panel.component.html',
  styleUrl: './user-permissions-management-panel.component.css'
})
export class UserPermissionsManagementPanelComponent {
  @Input() workspaceName: string | undefined;
  @Input() permissions: Permission[] | undefined;

  showAddPermissionPanel = false;
  newUserEmail = '';
  newUserRole: UserRole = 'General';  // Using the defined type

  constructor(private http: HttpClient) {}

  toggleAddPermissionPanel() {
    this.showAddPermissionPanel = !this.showAddPermissionPanel;
  }

  addPermission() {
    if (this.permissions?.find(p => p.email === this.newUserEmail)) {
      alert('User with this email already exists.');
      return;
    }

    const payload = {
      email: this.newUserEmail,
      role: roleMapping[this.newUserRole]
    };

    this.http.put(`${environment.apiBaseUrl}/workspaces/${this.workspaceName}/assign-permission`, payload)
      .subscribe({
        next: () => this.reloadPermissions(),
        error: (error) => alert('Failed to add permission: ' + error.message)
      });
  }

  reloadPermissions() {
    this.http.get<Permission[]>(`${environment.apiBaseUrl}/workspaces/${this.workspaceName}/permissions`)
      .subscribe({
        next: (permissions: Permission[]) => {
          this.permissions = permissions;
          this.showAddPermissionPanel = false;  // Hide the panel on successful permission reload
        },
        error: (err) => {
          console.error('Failed to load permissions:', err);
          alert('Failed to load permissions: ' + err.message);
        }
      });
  }
}
