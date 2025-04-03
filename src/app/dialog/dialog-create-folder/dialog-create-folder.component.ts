import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-create-folder',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './dialog-create-folder.component.html',
  styleUrl: './dialog-create-folder.component.css'
})
export class DialogCreateFolderComponent {
  folderName: string = '';
  isPrivate:boolean = true;
  constructor(public dialogRef: MatDialogRef<DialogCreateFolderComponent>){

  }



  onCreate():void{
    const folderData = {
      name: this.folderName,
      status: this.isPrivate ? 'Privé' : 'Public'
    };
    this.dialogRef.close(folderData); //envoie le nom du dossier à la composant pple
  }

  onCancel(){
    //alert(this.statut);
    this.dialogRef.close();
  }
}
