import { Injectable } from '@angular/core';
import { AuthLoginDto } from '../dto/authLoginDto';
import { Observable, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AuthLoginResponseDto } from '../dto/authLoginResponseDto';
import { TokenService } from './token.service';






@Injectable({
  providedIn: 'root'
})
export class AuthService {


private apiUrl: string= environment.apiUrl;

  constructor(private http:HttpClient, private tokeService: TokenService) { }




public signIn(authLoginDto: AuthLoginDto): Observable<AuthLoginResponseDto>{
  return this.http.post<AuthLoginResponseDto>(this.apiUrl+"/Acceso/login", authLoginDto).pipe(
    tap(Response=>{
      this.tokeService.saveToken(Response.jwt)
    })
  )

  
}


}


     
