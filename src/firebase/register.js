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
    updateProfile(user, {
      displayName: name,
    }).then(
      signOut(auth)
        .then(() => {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log("User logged in:", userCredential.user);
              const user = userCredential.user;
              loadUserInfo(user);
            })
            .catch((error) => {
              console.error("Error logging in user:", error);
            });
        })
        .catch((error) => {
          console.error("Error signing out user:", error);
        })
    );
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
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};
