// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlOP9aOMQVSs94_HJzouZq0Yi9MlAEZFM",
  authDomain: "intern-portal-base.firebaseapp.com",
  projectId: "intern-portal-base",
  storageBucket: "intern-portal-base.firebasestorage.app",
  messagingSenderId: "470472165464",
  appId: "1:470472165464:web:39527618cfaf586a04222d",
  measurementId: "G-4WLCG65EP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);