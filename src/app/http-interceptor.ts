import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router: Router){

    }
    
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        console.log("Inside interceptor")
        console.log("old url ", req.url)
        let newurl = req.url + "?auth1=" + localStorage.getItem("token")
        let newHttpReq = req.clone({url: newurl});

        console.log("new url ", newHttpReq.url )

        return next.handle(newHttpReq)
        .do( (next) =>{
            console.log("next is ", next)
        },
            (error) =>{
                console.log("error is ", error)
                if(error.status == 401 || error.status == 403){
                    console.log("navigate user to the login page")
                    //this.router.navigate(['login'])
                    //return Observable.empty();
                  }else if(error.status == 404){
                    console.log("navigate user to the resource not found page")          
                    //this.router.navigate(['resource-not-found'])  
                    //return Observable.empty();                  
                }
            }
        )
        ;
    }



}