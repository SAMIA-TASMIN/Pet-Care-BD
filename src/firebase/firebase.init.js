// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqp3V_PMAdLWs-0vGvwFYUL7ciH-qKaLY",
  authDomain: "pet-care-bd-24d2a.firebaseapp.com",
  projectId: "pet-care-bd-24d2a",
  storageBucket: "pet-care-bd-24d2a.firebasestorage.app",
  messagingSenderId: "495083686934",
  appId: "1:495083686934:web:4118e172169d78e2af7937"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);