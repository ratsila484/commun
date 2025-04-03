import { Component, NgModule, Output, EventEmitter, OnInit } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faA, faArrowCircleLeft, faArrowCircleRight, faBars, faCamera, faCarBurst, faComputer, faExpand, faFile, faFileAlt, faFileInvoice, faFileWaveform, faSignOut, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { faHatHard } from "@fortawesome/free-solid-svg-icons";
import { LocalStorageService } from '../../service/local-storage.service';
import { windowWhen } from 'rxjs';


@Component({
  selector: 'app-side-bar',
  imports: [
    FontAwesomeModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService
  ) { }


  faBars = faBars;
  faHome = faHome;
  faMessage = faMessage;
  faSetting = faSignOut;
  faUser = faUser;
  faPhone = faPhone;
  faArchive = faArchive;
  faFormation = faHatHard;
  video = faVideo;
  communIcon = faFile;
  communIcon2 = faFileInvoice;
  hideShowBtn = faArrowCircleRight;
  isVisible = true;
  deplacerDroite = "";
  anime = "mainBloc position-fixed";
  animeBtnShowHide = "hideBtn";
  actual_user: string | null = "";
  @Output() clickHide = new EventEmitter<void>;
  @Output() clickShow = new EventEmitter<void>;


  //retrieve the value in the localstorage
  getActualUser(key: string): boolean {
    if (this.actual_user = this.localStorageService.getItem(key)) {
      return true;
    }else{
      return false;
    }
  }

  ngOnInit(): void {
    if(!this.getActualUser('user_connected')){
      window.location.href = "";
    }
  }

  formationPage() {
    window.location.href = 'formation'
  }

  homePage() {
    window.location.href = '/'
  }

  messagePage() {
    window.location.href = 'message';
  }

  displayMenu() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.deplacerDroite = "deplacerGauche ";
    } else {
      this.deplacerDroite = "deplacerDroite";
    }
  }
  discuss() {
    window.location.href = 'discuss';
  }
  profilePage() {
    window.location.href = 'profile';
  }
  communPage() {
    window.location.href = 'commun';
  }

  commun2Page() {
    window.location.href = 'commun2';
  }
  HomePage() {
    window.location.href = 'home';
  }
  VideoPage() {
    window.location.href = 'video';
  }

  cpt = 0;
  cacherSideBar() {
    if (this.cpt % 2 == 0) {
      this.anime = "mainBloc position-fixed animeLeft";
      this.animeBtnShowHide = "hideBtn animeLeft";
      this.clickHide.emit();
    } else {
      this.anime = "mainBloc position-fixed animeRight";
      this.animeBtnShowHide = "hideBtn animeRight";
      this.clickShow.emit();
    }
    this.cpt++;
  }


  //deconnexion
  logOut(key: string) {
    this.localStorageService.removeItem(key);
    window.location.href = "";
  }

}
