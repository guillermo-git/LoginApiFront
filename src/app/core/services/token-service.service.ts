import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }

  public saveToken(token:string): void{
    localStorage.setItem("token", token)

  }

  public deleteToken():void{

  }
}
