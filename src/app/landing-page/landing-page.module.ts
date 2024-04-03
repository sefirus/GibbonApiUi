import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, LandingPageRoutingModule, MatCardModule, MatInputModule, CoreModule, HttpClientModule
    ]
})
export class LandingPageModule { }
