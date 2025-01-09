import { Injectable } from '@angular/core';
import { AuthLoginDto } from '../dto/authLoginDto';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AuthLoginResponseDto } from '../dto/authLoginResponseDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


private apiUrl: string= environment.apiUrl;

  constructor(private http:HttpClient) { }


  public signIn(authDto: AuthLoginDto): Observable<AuthLoginResponseDto>{
   return this.http.post<AuthLoginResponseDto>(this.apiUrl+"/Acceso/login", authDto);

  }

   /*public signIn(authDto: AuthLoginDto): Subscription{
    return this.http.post(this.apiUrl+"/Acceso/login",authDto).subscribe({
      next:value=>{
        console.log(value);
      },
      error: err=>{
        console.log(err);
      }
    });
   }*/
}
