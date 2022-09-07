 import { getAuth } from "firebase/auth";
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9gi0Zp4g_Htn1V-q_xtJsSJsNecrwOFQ",
  authDomain: "ecommer-6a9ce.firebaseapp.com",
  projectId: "ecommer-6a9ce",
  storageBucket: "ecommer-6a9ce.appspot.com",
  messagingSenderId: "872310337237",
  appId: "1:872310337237:web:4ad88ab39c44f9222cfc5c",
  measurementId: "G-W0EPZBF3XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app