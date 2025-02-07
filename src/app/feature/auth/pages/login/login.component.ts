import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AppBaseComponet } from '../../../../core/utils/AppBaseComponet';
import { AuthLoginDto } from '../../../../core/dto/authLoginDto';
import { AuthService } from '../../../../core/services/auth.service';
import { lastValueFrom } from 'rxjs';
import { TokenService } from '../../../../core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends AppBaseComponet {

  public loginForm: FormGroup;

  constructor(private router:Router, private fb: FormBuilder, private authservice:AuthService, private tokenService: TokenService ){

    super();
    this.loginForm=this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });

  }


  /**
   * singIn
   */
  public async singIn() {

    let dtoLogin: AuthLoginDto;

    if(this.loginForm.valid){
     


      let email=this.loginForm.get('email')!.value;
      let password= this.loginForm.get('password')!.value;

      dtoLogin={
        "email":email,
        "password": password
      }

      
   await lastValueFrom(this.authservice.signIn(dtoLogin));

   console.log(this.tokenService.getToken())

   await this.router.navigateByUrl("/home-inicio")
 

    }else{
      alert("error")
    }
   
    
  }

  public getErrorsForm(field: string) : string{
    let message='';
    if(this.isTouchedField(this.loginForm, field)){
      if(this.loginForm.get(field)?.hasError('required')){
        message='Este campor es requrido';

      }
    }

    return message;
  } 
  /**
   * Registro
   * esta funcion sirve para rediccionar a formulario poara registrarse
   */
  public Registro() {
    this.router.navigateByUrl("autenticacion/registro");

    
  }

  
}


