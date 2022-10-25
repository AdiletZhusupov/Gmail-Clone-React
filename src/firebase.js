import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAHxH2bWGSz12U4oF7I4pUm8DotiDbnT6A",
  authDomain: "clone-70a82.firebaseapp.com",
  projectId: "clone-70a82",
  storageBucket: "clone-70a82.appspot.com",
  messagingSenderId: "744511239849",
  appId: "1:744511239849:web:098cc6f4157c8fc4229bb8"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();


export {db, auth, provider};