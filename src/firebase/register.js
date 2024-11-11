import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { loadUserInfo } from "../js/utilities";
import { app } from "./firebase";

const auth = getAuth(app);

export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await user.reload();

    await updateProfile(user, { displayName: name });

    loadUserInfo(userCredential.user);
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
};
