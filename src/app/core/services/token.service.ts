import { Injectable } from '@angular/core';
import { getCookie, setCookie } from 'typescript-cookie'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(token: string): void{
    setCookie("jtw", token, {expires:1})
   // localStorage.setItem("token",token)
  }


  public getToken(): string{
   const token= getCookie("jtw");
   return token !== undefined ? token : "";
   // localStorage.setItem("token",token)
  }



}
