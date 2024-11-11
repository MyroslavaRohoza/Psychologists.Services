import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { loadUserInfo } from "../js/utilities";
import { setUserInfo } from "../zustand/selectors";
import { initialState } from "../zustand/slices/userSlice";

export const authListener = (user) =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loadUserInfo(user);
    } else {
      setUserInfo(initialState);
    }
  });
