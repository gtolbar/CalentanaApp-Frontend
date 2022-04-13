import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(
    private loginService:LoginService,
    private router:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      //1) VERIFICAR SI ESTA LOGUEADO
      let rpta = this.loginService.estaLogueado();
      if (!rpta) {
        this.loginService.cerrarSesion();
        return false;
      } else {
        //2) VERIFICAR SI EL TOKEN NO HA EXPIRADO
        const helper = new JwtHelperService();
        let token = sessionStorage.getItem(environment.TOKEN_NAME);
        if (!helper.isTokenExpired(token)) {
          return true;
        }else{
          this.loginService.cerrarSesion();
          return false;
        }
    }
  }

}
