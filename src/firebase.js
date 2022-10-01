// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9L8dNgNOw3YuEbG3ck5AWWqQHatNUGTQ",
  authDomain: "krd-shopz.firebaseapp.com",
  projectId: "krd-shopz",
  storageBucket: "krd-shopz.appspot.com",
  messagingSenderId: "572784372893",
  appId: "1:572784372893:web:5f5a539f18f306675bb874",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
};

export const db = getFirestore();
