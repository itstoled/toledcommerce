import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB1F3BJQEkn7IV3UjCV5HVYe5TvOF20v3U",
  authDomain: "toledcommerce.firebaseapp.com",
  databaseURL: "https://toledcommerce.firebaseio.com",
  projectId: "toledcommerce",
  storageBucket: "toledcommerce.appspot.com",
  messagingSenderId: "828112664807",
  appId: "1:828112664807:web:d50a7d39ad752c7a46ca42",
  measurementId: "G-HBB4VH840J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
