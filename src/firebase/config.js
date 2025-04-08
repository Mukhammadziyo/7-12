import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0zoSJfQXg3zuZ2Xbyti3-qBrhz2jNsN0",
  authDomain: "usersproject-d6057.firebaseapp.com",
  projectId: "usersproject-d6057",
  storageBucket: "usersproject-d6057.firebasestorage.app",
  messagingSenderId: "419733449014",
  appId: "1:419733449014:web:8b83acf5fcb6a88ea1eb97",
  measurementId: "G-YEZZDP496H"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
