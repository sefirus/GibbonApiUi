import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {UserPermissionsItemComponent} from "./user-permissions-item/user-permissions-item.component";
import {SchemaObjectCardComponent} from "./schema-object-card/schema-object-card.component";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {WorkspaceResponse} from "../../core/models/WorkspaceResponse";
import {NgForOf} from "@angular/common";
import {
  UserPermissionsManagementPanelComponent
} from "./user-pwemissions-management-panel/user-permissions-management-panel.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditSchemaDialogComponent} from "../create-edit-schema-dialog/create-edit-schema-dialog.component";
import {SchemaObject} from "../../core/models/SchemaObject";


@Component({
  selector: 'app-workspace-management-page',
  standalone: true,
  imports: [RouterLink, UserPermissionsItemComponent, SchemaObjectCardComponent, NgForOf, UserPermissionsManagementPanelComponent],
  templateUrl: './workspace-management-page.component.html',
  styleUrl: './workspace-management-page.component.css'
})
export class WorkspaceManagementPageComponent  implements OnInit {
  workspace: WorkspaceResponse | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const workspaceName = params['name'];
      this.http.get<WorkspaceResponse>(`${environment.apiBaseUrl}/workspaces/${workspaceName}`).subscribe(data => {
        this.workspace = data;
      });
    });
  }

  createNewObject() {
    const dialogRef = this.dialog.open(CreateEditSchemaDialogComponent, {
      data: {
        isCreate: true,
        schemaObject: new SchemaObject({}),
        workspaceName: this.workspace!.name,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit()
      }
    });
  }
}
