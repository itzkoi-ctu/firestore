// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC6C5Bbwo21JtVQ21LQzdi-j_ruOJo_d4A",
  authDomain: "start-adde7.firebaseapp.com",
  projectId: "start-adde7",
  storageBucket: "start-adde7.firebasestorage.app",
  messagingSenderId: "1072422693085",
  appId: "1:1072422693085:web:2d4cf2ef4b741d7a4e5334",
  measurementId: "G-KETC49BVKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);