import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp9M9_HpXF2akCRduewC1WbVrxhhoSsEE",
  authDomain: "optica-gaona.firebaseapp.com",
  projectId: "optica-gaona",
  storageBucket: "optica-gaona.appspot.com",
  messagingSenderId: "109479291516",
  appId: "1:109479291516:web:ed134c753b853abb7877f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
