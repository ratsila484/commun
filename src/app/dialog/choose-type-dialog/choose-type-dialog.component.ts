import { Component, Inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { LocalStorageService } from '../../service/local-storage.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-choose-type-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule,
    FormsModule,
  ],
  templateUrl: './choose-type-dialog.component.html',
  styleUrl: './choose-type-dialog.component.css'
})
export class ChooseTypeDialogComponent {
  selectedValue = "Public";
  actual_user: any;
  listeUser: any[] = [];
  searchText!: string;
  filtredUsers: any;
  allowUsers: any[] = [];
  tmp: any;
  constructor(
    private dialog: MatDialog,
    private localStorageService: LocalStorageService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.listeUser = data.listUser,
      this.filtredUsers = this.listeUser
  }

  searchInput() {
    if (this.searchText) {
      this.filtredUsers = this.listeUser.filter(item =>
        item.email.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filtredUsers = this.listeUser; // Si le terme de recherche est vide, afficher tous les fichiers
    }
  }



  onSelectionChange(event: Event, email: string) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.checked) {
      this.allowUsers.push(email);
    } else {
      const index = this.allowUsers.indexOf(email);
      if (index !== -1) {
        this.allowUsers.splice(index, 1);
      }
    }
    console.log(this.allowUsers);
  }

  openUploadDialog() {
    if (this.selectedValue == "Public") {
      this.dialog.closeAll();
      this.dialog.open(UploadDialogComponent, {
        disableClose: true,
        data: {
          uploaderName: this.localStorageService.getItem('user_connected'),
          statut: this.selectedValue,
          listAllowUsers: this.allowUsers
        }
      });
    } else {
      if (this.allowUsers.length != 0) {
        this.dialog.closeAll();
        this.dialog.open(UploadDialogComponent, {
          disableClose: true,
          data: {
            uploaderName: this.localStorageService.getItem('user_connected'),
            statut: this.selectedValue,
            listAllowUsers: this.allowUsers
          }
        });
      }
    }
  }


}
