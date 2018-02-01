import * as Firebase from 'firebase';

export interface AuthService{

    userSignup(email, password);

}

export class AuthServiceImpl implements AuthService{
    
    userSignup(email: any, password: any) {
        this.signUpWithEmailAndPassword(email, password)
    }

    private signUpWithEmailAndPassword(email, password){
        
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response: Firebase.User){
            console.log(response)
            let currentUser : Firebase.User = Firebase.auth().currentUser;
            console.log("urrent user is ", currentUser.email)
            console.log("urrent user is ", currentUser.displayName)

            currentUser.getIdToken(true).then( (token: string) => {
                console.log("TOken is ", token )
            }, (error : any) =>{
                console.log(error)
            } )

            console.log("we got google firebase auth response")


        }).catch(function(error){
            console.log(error.message)
        })

        console.log("Firebase is finished")

    }

    signInWithGoogle(){
        
    }

}