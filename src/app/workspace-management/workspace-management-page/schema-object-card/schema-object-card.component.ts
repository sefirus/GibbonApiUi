import {Component, Input} from '@angular/core';
import {SchemaObject} from "../../../core/models/SchemaObject";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-schema-object-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './schema-object-card.component.html',
  styleUrl: './schema-object-card.component.css'
})
export class SchemaObjectCardComponent {
  @Input() schemaObject : SchemaObject | null = null;

}
