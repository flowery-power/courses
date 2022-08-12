// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_nj9UnFAtsTo4HjGrS-ucXey-rnJi5OY",
  authDomain: "betterdegree-678f4.firebaseapp.com",
  databaseURL:
    "https://betterdegree-678f4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "betterdegree-678f4",
  storageBucket: "betterdegree-678f4.appspot.com",
  messagingSenderId: "817124204693",
  appId: "1:817124204693:web:cb23fa9fb42f02a46f3b9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
