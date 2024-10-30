import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { loadUserInfo } from "../js/utilities";
import { app } from "./firebase";
const auth = getAuth(app);

export const registerUser = async (displayName, email, password) => {
  const user = await uploadDataToFirestore(auth, displayName, email, password);
  if (user) {
     updateProfile(user, {
      displayName: displayName,
    });
    console.log("User registered:", user);
    return user;
  }
  // if (user.displayName) {
  //   loadUserInfo(user);
  // }
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
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};
