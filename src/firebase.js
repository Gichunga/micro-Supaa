import firebase from "firebase";
require("firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIxoTfBrcsrAITOLYpjY9pjkE3ASBOsrU",
  authDomain: "micro-supaa.firebaseapp.com",
  projectId: "micro-supaa",
  storageBucket: "micro-supaa.appspot.com",
  messagingSenderId: "834681608401",
  appId: "1:834681608401:web:5bd8dd54c452b66f41cdf0",
  measurementId: "G-GD37VCPSD2",
};

// Initialize Firebase and assign firestore object to a variable
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

firebase.analytics();

// export both the firebase app and the database
export {db, fb}
