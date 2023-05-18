// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMBbI4YeLjUohYjf3fAKGJNEjBqkY7uAw",
  authDomain: "tesla-clone-v3.firebaseapp.com",
  projectId: "tesla-clone-v3",
  storageBucket: "tesla-clone-v3.appspot.com",
  messagingSenderId: "462529909384",
  appId: "1:462529909384:web:a16d7c51731e9d9ffcc53d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
