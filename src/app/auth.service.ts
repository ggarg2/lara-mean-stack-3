import { UserDetail } from './models/user-detail.model';
import { Observable } from 'rxjs/Rx';
import * as Firebase from 'firebase';
import { from } from 'rxjs/observable/from';
import { APP_CONSTANTS } from './util/app.constants';
import { EventEmitter } from '@angular/core'

export interface AuthService{

    //userSignup(email, password) : Promise<any>;
    userSignup(email, password) : Observable<any>;
    userSignIn(email, password) : Observable<any>;
    inserUserInfo(user: Firebase.User);
    getToken();
    getUserDetail();
    reloadTokenAndUserDetail();
    logout();

    isAuthenticated(): boolean;

    refreshToken();

}

export class AuthServiceImpl implements AuthService{

    public appConstants = APP_CONSTANTS;
    private token: string;
    private userDetail: UserDetail;

    public onLoginEvent: EventEmitter<boolean> = new EventEmitter();

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
        from(user.getIdToken(true)).subscribe(
            data =>{
                console.log(data)
                this.token = data;
                this.storeValueInLocalStorage(this.appConstants.TOKEN, data);
            },
            error=>{
                console.log(error)
            }
            
        )

        this.createUserDetail(user)

    }

    private createUserDetail(user: Firebase.User){
        let userDetail : UserDetail = new UserDetail();
        userDetail.uid = user.uid;
        userDetail.displayName = user.displayName;
        userDetail.emailId = user.email;
        userDetail.emailVerified = user.emailVerified;
        userDetail.phone = user.phoneNumber
        userDetail.photoURL = user.photoURL
        this.userDetail = userDetail;
        this.storeValueInLocalStorage(this.appConstants.USER_DETAIL, JSON.stringify(userDetail));
    }

    signInWithGoogle(){
        
    }

    storeValueInLocalStorage(key: string, value: string){
        localStorage.setItem(key, value);
    }

    getValueFromLocalStorage(key){
        return localStorage.getItem(key)
    }

    removeValueFromLocalStorage(key){
        localStorage.removeItem(key)
    }

    getToken(){
        console.log("getToken ", this.token)
        return this.token;
    }
    getUserDetail(){
        console.log("getUserDetail ", this.userDetail)
        return this.userDetail;
    }

    reloadTokenAndUserDetail(){
        //this.storeUserInfo(Firebase.auth().currentUser);
        this.token = this.getValueFromLocalStorage(this.appConstants.TOKEN)
        this.userDetail = JSON.parse(this.getValueFromLocalStorage(this.appConstants.USER_DETAIL))
    }

    logout(){
        Firebase.auth().signOut();
        this.removeValueFromLocalStorage(this.appConstants.TOKEN)
        this.removeValueFromLocalStorage(this.appConstants.USER_DETAIL)
    }

    refreshToken(){

        //Students section

    }

    isAuthenticated(): boolean{
        return this.token != null;
    }

}