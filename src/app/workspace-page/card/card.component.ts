import { Component, Input } from '@angular/core';
import {Workspace} from "../../core/models/Workspace";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() workspace: Workspace | null = null;

  constructor() {}
}
