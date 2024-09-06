import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AppBaseComponet } from '../../../../core/utils/AppBaseComponet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends AppBaseComponet {

  public loginForm: FormGroup;

  constructor(private router:Router, private fb: FormBuilder){

    super();
    this.loginForm=this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });

  }


  /**
   * singIn
   */
  public singIn() {

    if(this.loginForm.valid){
      alert("hola")

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


