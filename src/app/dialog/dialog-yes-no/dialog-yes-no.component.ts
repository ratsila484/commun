import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-yes-no',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './dialog-yes-no.component.html',
  styleUrl: './dialog-yes-no.component.css'
})
export class DialogYesNoComponent {
  confirmation!: boolean;
  fileName!: string;
  labelNo!: string;
  labelYes!: string;
  action !: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DialogYesNoComponent>
  ) {
    this.fileName = data.file,
      this.labelYes = data.labelYes,
      this.labelNo = data.labelNo,
      this.action = data.action
  }

  sendAnswer(answer) {
    this.dialogRef.close(answer);
  }
}
