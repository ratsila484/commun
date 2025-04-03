import { Routes } from '@angular/router';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { Commun2Component } from './component/commun2/commun2.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { LocalComponent } from './component/local/local.component';


export const routes: Routes = [
   {
      path: '',
      component: LoginComponent
   },
   {
      path: 'commun2',
      component: Commun2Component
   },
   {
      path: 'home',
      component: HomeComponent
   },
   {
      path: 'signIn',
      component: SignInComponent
   },
   {
      path: 'local',
      component: LocalComponent
   },
];
