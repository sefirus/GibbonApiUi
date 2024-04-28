import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {Workspace} from "../../core/models/Workspace";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-user-workspaces',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './user-workspaces.component.html',
  styleUrl: './user-workspaces.component.css'
})
export class UserWorkspacesComponent {
  workspaces: Workspace[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    this.fetchWorkspaces();
  }

  fetchWorkspaces() {
    this.http.get<Workspace[]>(`${environment.apiBaseUrl}/workspaces`)
      .subscribe({
        next: (data) => {
          this.workspaces = data.map(item => new Workspace(
            item.id,
            item.name,
            item.accessLevel,
            item.numOfSchemaObjects,
            item.numOfDocuments
          ));
        },
        error: (error) => {
          console.error('Error fetching workspaces:', error);
        }
      });
  }

  addNewWorkspace() {
    console.log(this.authService.getAccessToken())
  }
}
