import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RenderParentFieldNodeComponent} from "./render-parent-field-node/render-parent-field-node.component";
import {MatIcon} from "@angular/material/icon";
import {SchemaFieldNodeComponent} from "./schema-field-node/schema-field-node.component";
import {SchemaObject} from "../../core/models/SchemaObject";
import {NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AddNewFieldIconComponent} from "./add-new-field-icon/add-new-field-icon.component";

@Component({
  selector: 'app-create-edit-schema-dialog',
  standalone: true,
  imports: [
    RenderParentFieldNodeComponent,
    MatIcon,
    SchemaFieldNodeComponent,
    NgForOf,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    NgIf,
    AddNewFieldIconComponent
  ],
  templateUrl: './create-edit-schema-dialog.component.html',
  styleUrl: './create-edit-schema-dialog.component.css'
})
export class CreateEditSchemaDialogComponent {
  schemaObject: SchemaObject;
  isCreate: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateEditSchemaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.schemaObject = data.schemaObject;
    this.isCreate = data.isCreate;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  objectKeys(obj: any): string[] | null {
    // if(this.isCreate && this.schemaObject?.fields != null && Object.keys(this.schemaObject.fields).length > 0) {
    //   console.log(this.schemaObject)
    //   return [];
    // }
    return Object.keys(obj) ?? [];
  }
}