// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyhxIQ4IV8TmlJq_HkHMFcNtsRm7Z4Lgc",
  authDomain: "athenai-4e87d.firebaseapp.com",
  projectId: "athenai-4e87d",
  storageBucket: "athenai-4e87d.firebasestorage.app",
  messagingSenderId: "58599274801",
  appId: "1:58599274801:web:cdb2db2cf96416d19b9810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);