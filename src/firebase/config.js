import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcCv3Hm2UTYxyp6HmMN6WDYd2ir_KmaeQ",
  authDomain: "project-3960273085750368301.firebaseapp.com",
  projectId: "project-3960273085750368301",
  storageBucket: "project-3960273085750368301.firebasestorage.app",
  messagingSenderId: "659751988758",
  appId: "1:659751988758:web:9ecd361289a3d135ff4f37",
  measurementId: "G-G9R8LET26T",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
