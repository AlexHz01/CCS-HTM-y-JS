// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtV0lftV9-CrM7KR7ZCjUdTpDijsZv1aM",
  authDomain: "fir-login-4203b.firebaseapp.com",
  projectId: "fir-login-4203b",
  storageBucket: "fir-login-4203b.appspot.com",
  messagingSenderId: "543570110961",
  appId: "1:543570110961:web:22ed85999f966dc94c7c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth, createUserWithEmailAndPassword,app, signInWithEmailAndPassword, signOut };