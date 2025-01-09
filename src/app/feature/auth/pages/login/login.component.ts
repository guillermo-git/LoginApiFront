 import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AppBaseComponet } from '../../../../core/utils/AppBaseComponet';
import { AuthLoginDto } from '../../../../core/dto/authLoginDto';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends AppBaseComponet {

  public loginForm: FormGroup;

  constructor(private router:Router, private fb: FormBuilder, private authservice:AuthService){

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

    let dtoLogin: AuthLoginDto;
    

    if(this.loginForm.valid){
<<<<<<< HEAD
      let email=this.loginForm.get('email')!.value ;
      let password= this.loginForm.get('password')!.value;
=======
      alert("todo nice");
      let email=this.loginForm.get('email')!.value;
      let password= this.loginForm.get('password')!.value;

      
>>>>>>> 8ab323eb89fa08026f93e671757f1e5864e3e765
      dtoLogin={
        "email":email,
        "password": password
        
      }

<<<<<<< HEAD
      this.authservice.signIn(dtoLogin).subscribe(value=>{
        this.
      });
    //  console.log(dtoLogin);
=======
      console.log(dtoLogin);
>>>>>>> 8ab323eb89fa08026f93e671757f1e5864e3e765
//this.authservice.login(dtoLogin); 

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


