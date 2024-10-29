import admin from "firebase-admin";
import firebase from "firebase/compat";

export const firebaseConfig = {
  apiKey: "AIzaSyCLweLaRJ_ckwb4XR8Dtyvl3LD_NYMgXVs",
  authDomain: "ebuddy-dfdc5.firebaseapp.com",
  projectId: "ebuddy-dfdc5",
  storageBucket: "ebuddy-dfdc5.appspot.com",
  messagingSenderId: "991446937366",
  appId: "1:991446937366:web:36afa50d06122d6d022a37",
  measurementId: "G-8NR5RZX19L",
};

const serviceAccount = require("../../firebase-ebuddy.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
