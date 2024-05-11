import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";
import {SchemaField} from "../../../core/models/SchemaField";
import {SchemaObject} from "../../../core/models/SchemaObject";

@Component({
  selector: 'app-add-new-field-icon',
  standalone: true,
  imports: [
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatIconButton
  ],
  templateUrl: './add-new-field-icon.component.html',
  styleUrl: './add-new-field-icon.component.css'
})
export class AddNewFieldIconComponent {
  @Input() schemaFields: { [key: string]: SchemaField } | SchemaObject = {};
  @Output() onFieldAdded = new EventEmitter<{ key: string, field: SchemaField }>();

  addField(type: string): void {
    const fieldName = `New${type}Field`;
    const newField = new SchemaField({
      fieldName: fieldName,
      type: type,
      isPrimaryKey: false,
      fields: {}
    });

    if (this.schemaFields instanceof SchemaObject) {
      this.schemaFields.numberOfFields++;
    } else {
    }
    this.onFieldAdded.emit({ key: `field_${Date.now()}`, field: newField });
    console.log(this.schemaFields)
  }

  private getFields(): { [key: string]: SchemaField } {
    return this.schemaFields instanceof SchemaObject ? this.schemaFields.fields : this.schemaFields;
  }
}
