import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RenderParentFieldNodeComponent} from "./render-parent-field-node/render-parent-field-node.component";
import {MatIcon} from "@angular/material/icon";
import {SchemaFieldNodeComponent} from "./schema-field-node/schema-field-node.component";
import {SchemaObject} from "../../core/models/SchemaObject";
import {NgForOf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

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
    MatLabel
  ],
  templateUrl: './create-edit-schema-dialog.component.html',
  styleUrl: './create-edit-schema-dialog.component.css'
})
export class CreateEditSchemaDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateEditSchemaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchemaObject
  ) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
