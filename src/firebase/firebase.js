// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database"; 
import { getStorage } from "firebase/storage";

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
const firestore = getFirestore(app); 
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, firestore, db, storage, app }; 
/*
const uploadDataToFirestore = async () => {
  try {
    console.log("Firestore reference:", firestore);
    const psychologistsCollection = collection(firestore, "psychologists");

    for (const user of psychologists) {
      await addDoc(psychologistsCollection, user);
    }
  } catch (error) {
    throw new Error(error);
  }
};

uploadDataToFirestore();
*/