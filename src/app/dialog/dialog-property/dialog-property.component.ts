import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
@Component({
  selector: 'app-dialog-property',
  imports: [
    MatDialogModule,
    MatButtonModule,OverlayModule
  ],
  templateUrl: './dialog-property.component.html',
  styleUrl: './dialog-property.component.css'
})
export class DialogPropertyComponent {
  fileName!: string;
  path!: string;
  uploader!: string;
  taille!: string;
  dateUpload!: string;
  statut!: string;
  type!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DialogPropertyComponent>
  ) {
    this.fileName = data.fileName,
      this.path = data.path,
      this.uploader = data.uploader,
      this.taille = data.taille,
      this.dateUpload = data.dateUpload,
      this.statut = data.statut,
      this.type = data.type
  }

  fermer(){
    this.dialogRef.close();
  }

  formatNom(nom: string, maxLength: number = 10): string {
    if (nom.length <= maxLength) {
      return nom; // Pas besoin de tronquer si le nom est déjà court
    }

    const debut = nom.slice(0, Math.floor(maxLength / 2)); // Première moitié
    const fin = nom.slice(-Math.floor(maxLength / 2)); // Dernière moitié

    return `${debut}...${fin}`;
  }
}
