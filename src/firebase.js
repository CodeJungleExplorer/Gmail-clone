import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCrE5izDUWMDMKqjZou8hQLSb_hJE323vs",
  authDomain: "clone-vt-75507.firebaseapp.com",
  projectId: "clone-vt-75507",
  storageBucket: "clone-vt-75507.appspot.com",
  messagingSenderId: "1013550557311",
  appId: "1:1013550557311:web:2ecd9bf2e79b81de5c774a",
  measurementId: "G-79YRZ3KJ9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();