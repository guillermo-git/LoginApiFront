import { Injectable } from '@angular/core';
import { AuthLoginDto } from '../dto/authLoginDto';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { AuthLoginResponseDto } from '../dto/AuthLoginResponseDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


private apiUrl: string= environment.apiUrl;

  constructor(private http:HttpClient) { }


  public login(authDto: AuthLoginDto): Observable<AuthLoginResponseDto>{
   return this.http.post<AuthLoginResponseDto>(this.apiUrl+"/Acceso/login", authDto);

  }
}
