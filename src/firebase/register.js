import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { loadUserInfo } from "../js/utilities";
import { app } from "./firebase";

const auth = getAuth(app);

export const registerUser = async (name, email, password) => {
  const user = await uploadDataToFirestore(auth, name, email, password);

  if (user) {
    try {
      await updateProfile(user, { displayName: name });

      await signOut(auth);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);

      loadUserInfo(userCredential.user);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  }
};

export const uploadDataToFirestore = async (
  auth,
  displayName,
  email,
  password
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};
