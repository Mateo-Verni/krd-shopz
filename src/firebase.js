// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "krd-shopz.firebaseapp.com",
  projectId: "krd-shopz",
  storageBucket: "krd-shopz.appspot.com",
  messagingSenderId: "572784372893",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
};

export const db = getFirestore();
