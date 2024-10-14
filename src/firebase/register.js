import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { unstable_batchedUpdates } from "react-dom";
import { setUserInfo } from "../zustand/selectors";

const auth = getAuth();
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
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("Profile updated successfully with name:", name);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
    const { displayName, accessToken, refreshToken, reloadUserInfo, validSince, uid } =
      user;
    
    console.log("User info:", displayName);

    loadUserInfo(
      displayName,
      accessToken,
      refreshToken,
      reloadUserInfo,
      validSince,
      uid
    );
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

const loadUserInfo = (...info) => {
  unstable_batchedUpdates(() => {
    setUserInfo({
      ...info,
      isSignedIn: true,
    });
  });
};
