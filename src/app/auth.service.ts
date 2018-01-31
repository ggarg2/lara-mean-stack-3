import * as Firebase from 'firebase';

export class AuthService{

    signUpWithEmailAndPassword(email, password){
        
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response){
            console.log(response)
        }).catch(function(error){
            console.log(error.message)
        })

    }

    signInWithGoogle(){
        
    }

}