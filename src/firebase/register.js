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
      password,
      name
    );
    const user = userCredential.user;

    console.log("User registered:", user);
    await updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        const {
          displayName,
          accessToken,
          refreshToken,
          reloadUserInfo,
          validSince,
          uid,
        } = user;
        loadUserInfo({
          displayName,
          accessToken,
          refreshToken,
          reloadUserInfo,
          validSince,
          uid,
        });
        console.log("Profile updated successfully with name:", name);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};
