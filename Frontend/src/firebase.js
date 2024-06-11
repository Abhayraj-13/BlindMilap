// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_aWX4YQ3cpalGBnpYcv2QjjzNU3QRdsg",
  authDomain: "chatapp-b1fa9.firebaseapp.com",
  projectId: "chatapp-b1fa9",
  storageBucket: "chatapp-b1fa9.appspot.com",
  messagingSenderId: "216742965936",
  appId: "1:216742965936:web:86282a757c0cf9a76a8175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);