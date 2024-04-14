import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButton} from "@angular/material/button";
import {RegisterFormComponent} from "../../layout/register-form/register-form.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatCard, MatCardTitle, MatCardContent, MatFormField, MatLabel, MatError, FormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButton, RegisterFormComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
