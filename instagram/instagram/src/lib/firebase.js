import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';

// here I want to import the seed file

const firebaseConfig = {
  apiKey: "AIzaSyDiQwt7ugrM1kna9a2FQYitka5PJ-njyGQ",
  authDomain: "instagram-7854f.firebaseapp.com",
  projectId: "instagram-7854f",
  storageBucket: "instagram-7854f.appspot.com",
  messagingSenderId: "56214443805",
  appId: "1:56214443805:web:c3863bddcd919df0b873f4"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const analytics = firebaseApp.analytics();
const auth = firebase.auth();

const FieldValue = db.FieldValue;

export { db, analytics, FieldValue, auth };