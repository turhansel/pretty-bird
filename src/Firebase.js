import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcsxiNDmn6H1BFUmI33AqAfNVS4WjY7IQ",
  authDomain: "twitter-clone-befb7.firebaseapp.com",
  projectId: "twitter-clone-befb7",
  storageBucket: "twitter-clone-befb7.appspot.com",
  messagingSenderId: "106357729207",
  appId: "1:106357729207:web:e6e9b5518a576eb481ea32",
  measurementId: "G-WYM3CMQNVX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
