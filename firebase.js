// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaaviiCAu_-4JvgOH8KNuPFHkMCgd1Iec",
  authDomain: "uber-next-clone-live-e9c0b.firebaseapp.com",
  projectId: "uber-next-clone-live-e9c0b",
  storageBucket: "uber-next-clone-live-e9c0b.appspot.com",
  messagingSenderId: "170338791802",
  appId: "1:170338791802:web:7bb8b87a8bf2a9874da6c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}