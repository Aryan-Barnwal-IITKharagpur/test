// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAoB0j9hQFmU4131RrwB-4WVJHp9usEJhc",
  authDomain: "codewrestling-8b818.firebaseapp.com",
  projectId: "codewrestling-8b818",
  storageBucket: "codewrestling-8b818.appspot.com",
  messagingSenderId: "565240058828",
  appId: "1:565240058828:web:412cbb5b2011b897cdc369",
  measurementId: "G-DSKRDP00ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };