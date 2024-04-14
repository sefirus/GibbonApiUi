import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-user-workspaces',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user-workspaces.component.html',
  styleUrl: './user-workspaces.component.css'
})
export class UserWorkspacesComponent {

}
