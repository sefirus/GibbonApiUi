import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {SchemaField} from "../../../core/models/SchemaField";

@Component({
  selector: 'app-parent-schema-field-node',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './parent-schema-field-node.component.html',
  styleUrl: './parent-schema-field-node.component.css'
})
export class ParentSchemaFieldNodeComponent {
  @Input() schemaField: SchemaField | undefined;  // The SchemaField object
  @Input() isCreate: boolean = false;
  @Output() nameChange = new EventEmitter<string>();
  @Output() deleteField = new EventEmitter<string>();

  onDeleteField(): void {
    if (this.schemaField) {
      this.deleteField.emit(this.schemaField.fieldName);
    }
  }
  get fieldName(): string {
    return this.schemaField?.fieldName || '';
  }

  set fieldName(value: string) {
    if (this.schemaField) {
      this.schemaField.fieldName = value;
    }
  }

  getColor(): string {
    switch (this.schemaField?.type) {
      case 'Object':
        return 'rgba(123, 159, 176, 1)';
      case 'Array':
        return 'rgba(255, 136, 98, 1)';
      default:
        return 'rgba(123, 159, 176, 1)';
    }
  }
}
