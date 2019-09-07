import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
        constructor(){
        super();
        this.login = this.login.bind(this)
        this.state = {
            online:[
                {id: 0, nombre:'David', date: 'Dec 25', image:'http://yampi.cat/chat/david.jpg'},
                {id: 1, nombre:'Alejandro', date: 'Dec 25', image: 'http://yampi.cat/chat/alejandro.jpg'}
            ]

        }
    }
    login(){
        const users = {
            id: this.state.online.length,
            nombre: 'yampi2',
            date: 'Dec 25',
            image: 'http://yampi.cat/chat/yampi.png'
        }
    
        console.log(users)

        firebase.database().ref('online/'+ users.id).set(users)
  
  
    }
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        var userName=""
        var user2 = firebase.auth().currentUser;
        if (user2 != null) {
            console.log(user2)
            user2.providerData.forEach(function (profile) {
            userName = profile.displayName.split(" ")
            userName = userName[0]

            console.log(userName)
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);

          });
          
        }
        
        return (
            <div className="btn-group">
            <li className="nav-item ">
                {
                    user
                        ? <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{userName}</button>
                        : ""
                }
                
                {
                    user
                        ? <div className="dropdown-menu"><a className="dropdown-item" href="#" onClick={signOut} >Cerrar sesión</a></div>
                        : <a className="nav-link text-uppercase text-info" href="#" onClick={signInWithGoogle} >Iniciar sesión</a>
                }
            </li>
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);