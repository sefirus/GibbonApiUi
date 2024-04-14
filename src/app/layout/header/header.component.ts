import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {NgIf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {RegisterFormComponent} from "../register-form/register-form.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbar,
    NgIf,
    MatButton,
    RouterLink,
    MatIconButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public authService: AuthService, private dialog: MatDialog) {}
  openDialog(action: string): void {
    if (action === 'Login') {
      this.dialog.open(LoginDialogComponent, {
        //width: '350px'
      });
    } else if (action === 'Register') {
      this.dialog.open(RegisterFormComponent, {
        //width: '350px'
      });
    }
  }

}
