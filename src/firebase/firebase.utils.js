import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAFtSWGD1FNu--l0-oyLFYWYdf7KNhTEUA",
    authDomain: "crwn-db-cf577.firebaseapp.com",
    projectId: "crwn-db-cf577",
    storageBucket: "crwn-db-cf577.appspot.com",
    messagingSenderId: "1070867647176",
    appId: "1:1070867647176:web:32d060f5fe23d9390f73fd",
    measurementId: "G-PCTPEGG1JT"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
