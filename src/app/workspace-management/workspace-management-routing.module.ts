import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkspaceManagementPageComponent} from "./workspace-management-page/workspace-management-page.component";

const routes: Routes = [
  { path: '', component: WorkspaceManagementPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceManagementRoutingModule { }
