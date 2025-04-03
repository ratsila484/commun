import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-download-success',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './download-success.component.html',
  styleUrl: './download-success.component.css'
})
export class DownloadSuccessComponent {
  folderName: string = '';
  //isPrivate:boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DownloadSuccessComponent>
  ) {
    this.folderName = data.folderName
      //this.labelYes = data.labelYes,
      //this.labelNo = data.labelNo
  }


}
