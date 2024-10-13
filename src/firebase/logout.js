import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
      console.error("Error during logout:", error.message);
      throw error;
  }
};