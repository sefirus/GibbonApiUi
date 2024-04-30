import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {UserPermissionsItemComponent} from "./user-permissions-item/user-permissions-item.component";
import {SchemaObjectCardComponent} from "./schema-object-card/schema-object-card.component";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {WorkspaceResponse} from "../../core/models/WorkspaceResponse";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-workspace-management-page',
  standalone: true,
  imports: [RouterLink, UserPermissionsItemComponent, SchemaObjectCardComponent, NgForOf],
  templateUrl: './workspace-management-page.component.html',
  styleUrl: './workspace-management-page.component.css'
})
export class WorkspaceManagementPageComponent  implements OnInit {
  workspace: WorkspaceResponse | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const workspaceName = params['name'];
      this.http.get<WorkspaceResponse>(`${environment.apiBaseUrl}/workspaces/${workspaceName}`).subscribe(data => {
        this.workspace = data;
      });
    });
  }
}
