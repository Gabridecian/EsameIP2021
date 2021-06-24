import firebase from "firebase";
require("firebase/firestore");
var config = {
  apiKey: "AIzaSyDFIexyAphYDsRbD8bT6ZBEQcOcETdPHYs",
  authDomain: "progmeteo2021.firebaseapp.com",
  projectId: "progmeteo2021",
  storageBucket: "progmeteo2021.appspot.com",
  messagingSenderId: "1076650219996",
  appId: "1:1076650219996:web:2cf2e4ae2f3ba2f6a01719",
  measurementId: "G-DSMHGVFQPT"
};
const fb = firebase.initializeApp(config);
const db = firebase.firestore();
export { fb, db };
