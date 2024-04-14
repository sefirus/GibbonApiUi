import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserWorkspacesComponent } from './user-workspaces/user-workspaces.component';

const routes: Routes = [
    { path: '', component: UserWorkspacesComponent },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class WorkspacePageRoutingModule { }