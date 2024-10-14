import { unstable_batchedUpdates } from "react-dom";
import { setUserInfo } from "../zustand/selectors";

export const loadUserInfo = (info) => {
  unstable_batchedUpdates(() => {
    setUserInfo({
     ...info,
      isSignedIn: true,
    });
  });
};

