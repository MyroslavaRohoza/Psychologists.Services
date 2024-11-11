import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getDatabase } from "firebase/database"; 
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebase_config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); 
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, firestore, db, storage, app }; 
