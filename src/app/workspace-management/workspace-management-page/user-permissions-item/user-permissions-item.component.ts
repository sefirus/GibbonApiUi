import {Component, Input} from '@angular/core';
import {Permission} from "../../../core/models/Permission";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-permissions-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-permissions-item.component.html',
  styleUrl: './user-permissions-item.component.css'
})
export class UserPermissionsItemComponent {
  @Input() permission : Permission | null = null;

}
