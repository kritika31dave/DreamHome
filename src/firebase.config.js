// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJlvt_5KGqYC799Ut3XMWG4Y8sdEjFH2g",
  authDomain: "house-b014b.firebaseapp.com",
  projectId: "house-b014b",
  storageBucket: "house-b014b.appspot.com",
  messagingSenderId: "211431126470",
  appId: "1:211431126470:web:f1b2ac20a3d4be2c9b6ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();