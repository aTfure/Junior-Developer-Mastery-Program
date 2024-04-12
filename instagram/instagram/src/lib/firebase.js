import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// here I want to import the seed file

const config = {
  apiKey: "AIzaSyDiQwt7ugrM1kna9a2FQYitka5PJ-njyGQ",
  authDomain: "instagram-7854f.firebaseapp.com",
  projectId: "instagram-7854f",
  storageBucket: "instagram-7854f.appspot.com",
  messagingSenderId: "56214443805",
  appId: "1:56214443805:web:c3863bddcd919df0b873f4"
};

const firebase = initializeApp(config);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
const FieldValue = serverTimestamp();

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, db, auth, FieldValue };