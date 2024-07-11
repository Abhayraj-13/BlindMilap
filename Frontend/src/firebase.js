// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import{ GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { signOut } from "firebase/auth";
import {signInWithPopup} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_aWX4YQ3cpalGBnpYcv2QjjzNU3QRdsg",
  authDomain: "chatapp-b1fa9.firebaseapp.com",
  projectId: "chatapp-b1fa9",
  storageBucket: "chatapp-b1fa9.appspot.com",
  messagingSenderId: "216742965936",
  appId: "1:216742965936:web:86282a757c0cf9a76a8175",
  databaseURL: "https://chatapp-b1fa9-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth,getAuth, db, database,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword, set, ref, GoogleAuthProvider, signInWithRedirect,signOut };


