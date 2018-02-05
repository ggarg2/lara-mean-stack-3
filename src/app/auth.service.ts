import { Observable } from 'rxjs/Rx';
import * as Firebase from 'firebase';
import { from } from 'rxjs/observable/from';

export interface AuthService{

    //userSignup(email, password) : Promise<any>;
    userSignup(email, password) : Observable<any>;
    userSignIn(email, password) : Observable<any>;
    inserUserInfo(user: Firebase.User);

}

export class AuthServiceImpl implements AuthService{
    
    // userSignup(email: any, password: any) : Promise<any> {
    //     return this.signUpWithEmailAndPassword(email, password)
    // }

    userSignup(email: any, password: any) : Observable<any> {
        return this.signUpWithEmailAndPassword(email, password)
    }

    // private signUpWithEmailAndPassword(email, password): Promise<any>{
    //     return Firebase.auth().createUserWithEmailAndPassword(email, password)
    // }

    userSignIn(email, password) : Observable<any>{
        return this.signInWithEmailAndPassword(email, password);
    }

    inserUserInfo(user: Firebase.User){
        this.storeUserInfo(user);
    }

    private signUpWithEmailAndPassword(email, password): Observable<any>{
        return from(Firebase.auth().createUserWithEmailAndPassword(email, password))
    }

    private signInWithEmailAndPassword(email, password): Observable<any>{
        return from(Firebase.auth().signInWithEmailAndPassword(email, password))
    }

    private storeUserInfo(user: Firebase.User){
        console.log(user)
    }

    signInWithGoogle(){
        
    }

}