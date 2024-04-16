import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

// here I want to import the seed file

const firebaseConfig = {
  apiKey: "AIzaSyDiQwt7ugrM1kna9a2FQYitka5PJ-njyGQ",
  authDomain: "instagram-7854f.firebaseapp.com",
  projectId: "instagram-7854f",
  storageBucket: "instagram-7854f.appspot.com",
  messagingSenderId: "56214443805",
  appId: "1:56214443805:web:c3863bddcd919df0b873f4"
};


const firebase = Firebase.initializeApp(firebaseConfig);


const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };