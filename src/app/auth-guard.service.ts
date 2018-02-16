import { AuthService, AuthServiceImpl } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{


    constructor(private authService: AuthServiceImpl){

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {

        console.log("Inside auth guard")
        //authService

        return true;
        
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log("Inside auth child guard")

        return true
    }
}