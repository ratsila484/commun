import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogSuccessComponent } from '../dialog-success/dialog-success.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-upload-done',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './dialog-upload-done.component.html',
  styleUrl: './dialog-upload-done.component.css'
})
export class DialogUploadDoneComponent {
  constructor(
    public dialogRef : MatDialogRef<DialogSuccessComponent>
  ){

  }
  fermer(){
    this.dialogRef.close();
  }
}
