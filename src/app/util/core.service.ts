import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoreServices{

    constructor(private httpClient: HttpClient){

    }

    get(url, options): Observable<any>{
        return this.httpClient.get(url, options);
    }

    post(url, body, options): Observable<any>{
        return this.httpClient.post(url, body, options)
    }

    put(url, body,options): Observable<any>{
        return this.httpClient.put(url, body,options);
    }

    delete(url, options): Observable<any>{
        return this.httpClient.delete(url, options)
    }

}