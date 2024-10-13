import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const auth = getAuth();
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name
    );
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("Profile updated successfully with name:", name);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });

    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};
