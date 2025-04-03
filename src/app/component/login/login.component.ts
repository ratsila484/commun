import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '../../service/local-storage.service';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatButtonModule,
    SideBarComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }
  password !: string;
  email !: string;
  isLoading = false;
  actual_user: any;

  ngOnInit(): void {
      if(this.localStorageService.getItem('user_connected')){
        window.location.href = 'home';
      }
  }

  //save the user connected to the localstoarge
  saveToLocalStorage(key: string, userName: string) {
    this.localStorageService.setItem(key, userName);
  }

  //recuperer le localStorage
  retrieveFromLocalStorage(key: string) {
    const value = this.localStorageService.getItem(key);
    console.log(value);
  }


  loginIn() {
    console.log(this.email + "||" + this.password);
    if (this.email && this.password) {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);
      this.http.post("http://localhost:8000/login.php", formData).subscribe(
        (result: any) => {
          if (result.success) {
            this.actual_user = result.content;
            //alert("Vous êtes connecter en tant que " + this.actual_user);
            console.log(this.actual_user);
            //enregistrer dans le localStorage
            this.saveToLocalStorage('user_connected',this.actual_user.email);
            window.location.href = "home";
          } else {
            alert(result.content);
          }
        }
      );
    } else {
      alert("champs laissé vide");
    }
  }

}
