import { Component, Input } from '@angular/core';
import {Workspace} from "../../core/models/Workspace";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() workspace: Workspace | null = null;

  constructor() {}
}
