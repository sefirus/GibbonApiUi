import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RenderParentFieldNodeComponent} from "./render-parent-field-node/render-parent-field-node.component";
import {MatIcon} from "@angular/material/icon";
import {SchemaFieldNodeComponent} from "./schema-field-node/schema-field-node.component";
import {SchemaObject} from "../../core/models/SchemaObject";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-edit-schema-dialog',
  standalone: true,
  imports: [
    RenderParentFieldNodeComponent,
    MatIcon,
    SchemaFieldNodeComponent,
    NgForOf
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
