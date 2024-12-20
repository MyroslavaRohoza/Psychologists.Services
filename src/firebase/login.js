import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { loadUserInfo } from "../js/utilities";
import { app } from "./firebase";
const auth = getAuth(app);

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await user.reload();

    loadUserInfo(userCredential.user);
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
