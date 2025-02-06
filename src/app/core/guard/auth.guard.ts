import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { getCookie } from 'typescript-cookie';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
 
  const token=getCookie("jtw")
  const ruter=inject(Router)
  if(token!=""){
    return true
  }else{
   ruter.navigateByUrl("autenticacion/registro")
    return false
  }
 
  
};
