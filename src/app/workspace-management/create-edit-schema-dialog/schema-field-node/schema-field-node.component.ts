import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {SchemaField} from "../../../core/models/SchemaField";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {RenderParentFieldNodeComponent} from "../render-parent-field-node/render-parent-field-node.component";

@Component({
  selector: 'app-schema-field-node',
  standalone: true,
  imports: [
    MatIcon,
    NgStyle,
    NgForOf,
    NgIf,
    RenderParentFieldNodeComponent
  ],
  templateUrl: './schema-field-node.component.html',
  styleUrl: './schema-field-node.component.css'
})
export class SchemaFieldNodeComponent {
  @Input() schemaField: SchemaField | undefined;  // The SchemaField object

  getColor(type: string): string {
    switch (type) {
      case 'Float':
      case 'Int':
        return 'rgba(205, 91, 136, 1)';
      case 'String':
        return 'rgba(150, 93, 174, 1)';
      case 'Boolean':
        return 'rgba(115, 177, 171, 1)';
      case 'Object':
        return 'rgba(123, 159, 176, 1)';
      case 'Array':
        return 'rgba(255, 136, 98, 1)';
      default:
        return 'rgba(205, 91, 136, 1)'; // Default color if type is unrecognized
    }
  }
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  constructor() {
  }
}
