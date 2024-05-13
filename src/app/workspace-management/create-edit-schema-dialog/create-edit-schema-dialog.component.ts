import {Component, Inject, NgModule} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ParentSchemaFieldNodeComponent} from "./parent-schema-field-node/parent-schema-field-node.component";
import {MatIcon} from "@angular/material/icon";
import {SchemaFieldNodeComponent} from "./schema-field-node/schema-field-node.component";
import {SchemaObject} from "../../core/models/SchemaObject";
import {NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AddNewFieldIconComponent} from "./add-new-field-icon/add-new-field-icon.component";
import {SchemaField} from "../../core/models/SchemaField";
import {SchemaService} from "../../core/services/schema.service";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-edit-schema-dialog',
  standalone: true,
  imports: [
    ParentSchemaFieldNodeComponent,
    MatIcon,
    SchemaFieldNodeComponent,
    NgForOf,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    NgIf,
    AddNewFieldIconComponent,
    FormsModule,
  ],
  templateUrl: './create-edit-schema-dialog.component.html',
  styleUrl: './create-edit-schema-dialog.component.css'
})
export class CreateEditSchemaDialogComponent {
  schemaObject: SchemaObject;
  isCreate: boolean = false;
  workspaceName: string;
  validationErrors: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateEditSchemaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private schemaService: SchemaService,
    private http: HttpClient
  ) {
    this.schemaObject = data.schemaObject;
    this.isCreate = data.isCreate;
    this.workspaceName = data.workspaceName;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  objectKeys(obj: any): string[] | null {
    return Object.keys(obj) ?? [];
  }

  get schemaName(): string {
    return this.schemaObject.name || '';
  }

  set schemaName(value: string) {
    this.schemaObject.name = value;
  }

  handleFieldAdded(event: { key: string, field: SchemaField }): void {
    this.schemaObject.fields[event.key] = event.field;
    this.schemaObject.numberOfFields++;
  }

  handleDeleteField(key: string): void {
    if (key in this.schemaObject.fields) {
      delete this.schemaObject.fields[key];
    }
  }

  resetPrimaryKeys() {
    Object.keys(this.schemaObject.fields).forEach(key => {
      this.schemaObject.fields[key].isPrimaryKey = false;
    });
  }

  saveObject() {
    const normalizedSchemaObject = this.schemaService.transform(this.schemaObject)
    const url = `${environment.apiBaseUrl}/schema/${this.workspaceName}/${this.schemaObject.name}/validate`;
    this.http.post(url, normalizedSchemaObject).subscribe({
      next: (response) => this.handleValidationSuccess(response, normalizedSchemaObject),
      error: (error: HttpErrorResponse) => this.handleValidationError(error)
    });
  }

  private handleValidationSuccess(response: any, normalizedSchemaObject: any): void {
    const saveUrl = `${environment.apiBaseUrl}/schema/${this.workspaceName}/${this.schemaObject.name}`;
    this.http.post(saveUrl, normalizedSchemaObject).subscribe({
      next: () => this.dialogRef.close(true),
      error: (error: HttpErrorResponse) => this.validationErrors = [error.message]
    });
  }

  private handleValidationError(error: HttpErrorResponse): void {
    this.validationErrors = []; // Clear existing errors
    if (error.status === 400 && error.error && error.error.errors) {
      const errorsObj = error.error.errors;
      for (const key of Object.keys(errorsObj)) {
        for (const errorMessage of errorsObj[key]) {
          this.validationErrors.push(`${key}: ${errorMessage}`);
        }
      }
    }
  }
}
