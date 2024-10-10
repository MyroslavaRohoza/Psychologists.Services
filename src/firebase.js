import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzcwkl9tdILUv2d0fHWTg_dSen6-U_4Aw",
  authDomain: "psychologists-services-6c426.firebaseapp.com",
  projectId: "psychologists-services-6c426",
  storageBucket: "psychologists-services-6c426.appspot.com",
  messagingSenderId: "119011647533",
  appId: "1:119011647533:web:4ecee5c4f74ba6d64498a4",
  measurementId: "G-TSH5T635DF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
