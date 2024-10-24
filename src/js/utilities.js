import { unstable_batchedUpdates } from "react-dom";
import {
  setPsyhologistsList,
  setQueryAmountOfPsychologists,
  setQueryLastVisible,
  setUserInfo,
} from "../zustand/selectors";

export const exportData = (data) => {
  unstable_batchedUpdates(() => {
    setPsyhologistsList(data);
  });
};

export const loadUserInfo = (info) => {
  unstable_batchedUpdates(() => {
    setUserInfo({
      ...info,
      isSignedIn: true,
    });
  });
};

export const setLastVisible = (data) => {
  unstable_batchedUpdates(() => {
    setQueryLastVisible(data);
  });
};

export const setPsychologistsAmount = (data) => {
  unstable_batchedUpdates(() => {
    setQueryAmountOfPsychologists(data);
  });
};


