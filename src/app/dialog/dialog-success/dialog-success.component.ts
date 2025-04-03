import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-success',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './dialog-success.component.html',
  styleUrl: './dialog-success.component.css'
})
export class DialogSuccessComponent {
  constructor(
    public dialogRef : MatDialogRef<DialogSuccessComponent>
  ){

  }
  fermer(){
    this.dialogRef.close();
  }
}
