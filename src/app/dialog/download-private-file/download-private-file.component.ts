import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-download-private-file',
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './download-private-file.component.html',
  styleUrl: './download-private-file.component.css'
})
export class DownloadPrivateFileComponent {
  nom = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DownloadPrivateFileComponent>
  ) {
    this.nom = data.nomUploader
  }

  
}
