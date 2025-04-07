import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpadateSuccefulComponent } from '../upadate-succeful/upadate-succeful.component';

@Component({
  selector: 'app-update-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.css'
})
export class UpdateDialogComponent {
  nom !: string;
  statut !: string;
  allowUsers: any[] = [];
  users: any[] = [];
  searchText !: string;
  filtredUsers: any[] = [];
  idFile!: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private http: HttpClient,
    private dialog: MatDialog
  ) {
    this.nom = data.fileName,
      this.statut = data.statut,
      this.allowUsers = data.allowUser,
      this.users = data.users,
      this.filtredUsers = this.users,
      this.idFile = data.id
  }

  isStatut() {
    if (this.statut == "Privée") {
      return true
    } else {
      this.allowUsers.length = 0;
      return false;
    }
  }

  isChecked(user: string) {
    let result = false;
    this.allowUsers.forEach(element => {
      if (element == user) {
        result = true
      }
    });
    return result;
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

  searchInput() {
    if (this.searchText) {
      this.filtredUsers = this.users.filter(item =>
        item.email.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filtredUsers = this.users; // Si le terme de recherche est vide, afficher tous les fichiers
    }
  }

  toStringArray() {
    //assemblage en stirng des allowUsers
    let s = "";
    this.allowUsers.forEach(element => {
      s = s + " " + element;
    });
    return s
  }

  updateFile() {
    // console.log(this.idFile);
    // console.log(this.nom);
    // console.log(this.statut);
    // console.log(this.allowUsers);
    const formData = new FormData();
    formData.append('id', this.idFile.toString());
    formData.append('nom', this.nom);
    formData.append('statut', this.statut);
    formData.append('listDownload', this.toStringArray());
    formData.append('statut', this.statut);
    this.http.post("https://127.0.0.1:5000/api/update", formData).subscribe(
      (result: any) => {
        if (result.success) {
          //alert(result.message);
          //this.dialog.closeAll();
          this.dialog.open(UpadateSuccefulComponent);
        } else {
          alert(result.message)
        }
      }
    );
  }
}
