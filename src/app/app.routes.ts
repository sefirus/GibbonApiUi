import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
    { path: 'workspaces', loadChildren: () => import('./workspace-page/workspace-page.module').then(m => m.WorkspacePageModule) },
    { path: 'workspace-management', loadChildren: () => import('./workspace-management/workspace-management.module').then(m => m.WorkspaceManagementModule) },
];
