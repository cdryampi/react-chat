import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        var user2 = firebase.auth().currentUser;

        if (user2 != null) {
          user2.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
          });
        }
        return (
            <li className="nav-item ">
                {
                    user
                        ? <p>Hello, {user.displayName}</p>
                        : <p>Please sign in.</p>
                }

                {
                    user
                        ? <a className="nav-link text-uppercase text-info" href="#" onClick={signOut} >Cerrar sesión</a>
                        : <a className="nav-link text-uppercase text-info" href="#" onClick={signInWithGoogle} >Iniciar sesión</a>
                }
            </li>
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