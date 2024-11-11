import { getAuth, signOut } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
      console.error("Error during logout:", error.message);
  }
};