import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-wiev-stored-documents',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogContent
  ],
  templateUrl: './view-stored-documents.component.html',
  styleUrl: './view-stored-documents.component.css'
})
export class ViewStoredDocumentsComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewStoredDocumentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
