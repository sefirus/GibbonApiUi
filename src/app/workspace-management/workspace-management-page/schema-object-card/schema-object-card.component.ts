import {Component, Input} from '@angular/core';
import {SchemaObject} from "../../../core/models/SchemaObject";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../../../environments/environment";
import {ViewStoredDocumentsComponent} from "../../view-stored-documents/view-stored-documents.component";
import {CreateEditSchemaDialogComponent} from "../../create-edit-schema-dialog/create-edit-schema-dialog.component";

@Component({
  selector: 'app-schema-object-card',
  standalone: true,
  imports: [
    NgIf,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatIconButton,
    MatMenuItem
  ],
  templateUrl: './schema-object-card.component.html',
  styleUrl: './schema-object-card.component.css'
})
export class SchemaObjectCardComponent {
  @Input() schemaObject: SchemaObject | null = null;
  @Input() workspaceName: string | null = null;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  deleteItem(event: MouseEvent) {
    event.stopPropagation();
    const url = `${environment.apiBaseUrl}/schema/${this.workspaceName}/${this.schemaObject!.name}`;
    this.http.delete(url).subscribe({
    });
  }

  viewContent(event: MouseEvent) {
    event.stopPropagation();
    const url = `${environment.apiBaseUrl}/${this.workspaceName}/${this.schemaObject!.name}`;
    this.http.get(url).subscribe(data => {
      this.dialog.open(ViewStoredDocumentsComponent, {
        width: '80%',
        height: '70%',
        data: { content: JSON.stringify(data, null, 2) }
      });
    });
  }

  openSchemaEditDialog() {
    this.dialog.open(CreateEditSchemaDialogComponent, {
      data: {
        isCreate: false,
        schemaObject: this.schemaObject
      }
    });
  }

  protected readonly event = event;
}
