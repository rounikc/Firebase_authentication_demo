import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4w6oQTJz_RUbVio7GqedgM8oWu_P_og4",
  authDomain: "rnauth-kbandhu.firebaseapp.com",
  projectId: "rnauth-kbandhu",
  storageBucket: "rnauth-kbandhu.appspot.com",
  messagingSenderId: "535222088709",
  appId: "1:535222088709:web:a228badf6f481297a0586c"
};

//Iinitialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);