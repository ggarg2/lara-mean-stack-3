import { AuthService, AuthServiceImpl  } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard1 implements CanActivate{


    constructor(private authService: AuthServiceImpl){

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {

        console.log("Inside auth guard 1")
        //authService

        return true;
        
    }
}