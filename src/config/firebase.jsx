// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtXfW33dNnxjza74GHXq0ug6IFwIQFyZE",
  authDomain: "practice-project--1-react.firebaseapp.com",
  projectId: "practice-project--1-react",
  storageBucket: "practice-project--1-react.appspot.com",
  messagingSenderId: "725363085367",
  appId: "1:725363085367:web:9e3a52e658e51ffdf9afb2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)