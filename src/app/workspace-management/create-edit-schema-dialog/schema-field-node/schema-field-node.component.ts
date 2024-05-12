import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {SchemaField} from "../../../core/models/SchemaField";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ParentSchemaFieldNodeComponent} from "../parent-schema-field-node/parent-schema-field-node.component";
import {FormsModule} from "@angular/forms";
import {AddNewFieldIconComponent} from "../add-new-field-icon/add-new-field-icon.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-schema-field-node',
  standalone: true,
  imports: [
    MatIcon,
    NgStyle,
    NgForOf,
    NgIf,
    ParentSchemaFieldNodeComponent,
    FormsModule,
    AddNewFieldIconComponent,
    MatMenu,
    MatMenuTrigger,
    MatIconButton,
    MatMenuItem
  ],
  templateUrl: './schema-field-node.component.html',
  styleUrl: './schema-field-node.component.css'
})
export class SchemaFieldNodeComponent {
  @Input() schemaField: SchemaField | undefined;  // The SchemaField object
  @Input() isCreate: boolean = false;
  @Output() nameChange = new EventEmitter<string>();
  @Output() deleteField = new EventEmitter<string>();
  @Input() isRoot: boolean = false;
  @Output() resetPrimaryKey = new EventEmitter();

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

  updateFieldName(newName: string): void {
    const oldName = this.schemaField!.fieldName;
    if (this.schemaField && oldName !== newName) {
      this.schemaField.fieldName = newName;
      this.nameChange.emit(newName);
    }
  }

  handleFieldAdded(event: { key: string, field: SchemaField }): void {
    this.schemaField!.fields[event.key] = event.field;
  }

  handleArrayElementAdded(event: { key: string, field: SchemaField }): void {
    this.schemaField!.arrayElement = event.field;
  }

  onDeleteField(): void {
    if (this.schemaField) {
      this.deleteField.emit(this.schemaField.fieldName);
    }
  }

  handleDeleteField(key: string): void {
    if (key in this.schemaField!.fields) {
      delete this.schemaField!.fields[key];
    }
  }

  handleDeleteArrayElement(): void {
    if (this.schemaField?.type != 'Array'){
      return;
    }
    this.schemaField.arrayElement = undefined;
  }

  markFieldAsPK():void{
    this.resetPrimaryKey.emit();
    this.schemaField!.isPrimaryKey = true;
  }
}
