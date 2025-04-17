// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPVckMjmRt_pt9m97xEUNEITOuDMcCee4",
  authDomain: "naukri-clone-3e88e.firebaseapp.com",
  projectId: "naukri-clone-3e88e",
  storageBucket: "naukri-clone-3e88e.firebasestorage.app",
  messagingSenderId: "892384622626",
  appId: "1:892384622626:web:eb82531a6b7abf7638f27b",
  measurementId: "G-P27K7GVMS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);