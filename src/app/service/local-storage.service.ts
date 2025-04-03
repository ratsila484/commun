import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  //set a value in local storage
  setItem(key:string,value:string){
    localStorage.setItem(key,value);
  }

  //get a value from local storage
  getItem(key:string):string | null{
    return localStorage.getItem(key);
  }
  //get a value from local storage
  removeItem(key:string):void{
    localStorage.removeItem(key);
  }

  //remove all value from local storage
  clear():void{
    localStorage.clear();
  }
  
}
