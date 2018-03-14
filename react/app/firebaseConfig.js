import firebase from 'firebase';
import firebaseui from 'firebaseui';
import firestore from "firebase/firestore";

const FireBaseconfig = {
    apiKey: "AIzaSyCRcpnAfw0g81NDv2jrWOwuw7M2LBr1cTQ",
    authDomain: "buynsta-ae869.firebaseapp.com",
    databaseURL: "https://buynsta-ae869.firebaseio.com",
    projectId: "buynsta-ae869",
    storageBucket: "buynsta-ae869.appspot.com",
    // messagingSenderId: "778068248357"
};

firebase.initializeApp(FireBaseconfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();;
export const ui = new firebaseui.auth.AuthUI(firebase.auth());

export const auth = firebase.auth();
export const db = firebase.firestore();


export default firebase;