import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-in',
  imports: [
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(
    private http: HttpClient
  ) { }

  email !: string;
  password !: string;
  nom !: string;
  isLoading = false;

  register() {
    this.isLoading = true; //debut du chargement
    const formData = new FormData();
    if (this.email
      && this.nom
      && this.password
    ) {
      formData.append("email", this.email);
      formData.append("nom", this.nom);
      formData.append("password", this.password);
      this.http.post("http://localhost:8000/signIn.php", formData).subscribe((result: any) => {
        this.isLoading = false;
        if (result.success) {
          alert("Nouvelle utilisateur enregistrer  avec success");
          window.location.href = "";
        } else {
          alert("Erreur " + result.content);
        }
      })
    } else {
      this.isLoading = false;
      alert("Champs laissé vide");
    }
  }
}
