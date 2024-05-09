import {Component, Input} from '@angular/core';
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

  addField(type: string): void {
    const fieldName = `newField_${Object.keys(this.getFields()).length}`;
    const newField = new SchemaField({
      fieldName: fieldName,
      type: type,
      isPrimaryKey: false,
      fields: {}
    });

    if (this.schemaFields instanceof SchemaObject) {
      this.schemaFields.fields[fieldName] = newField;
      this.schemaFields.numberOfFields++;
    } else {
      this.schemaFields[fieldName] = newField;
    }
  }

  private getFields(): { [key: string]: SchemaField } {
    return this.schemaFields instanceof SchemaObject ? this.schemaFields.fields : this.schemaFields;
  }
}
