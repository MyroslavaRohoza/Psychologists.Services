import { unstable_batchedUpdates } from "react-dom";
import {
  setPsyhologiesList,
  setQueryLastVisible,
  setUserInfo,
} from "../zustand/selectors";

export const loadUserInfo = (info) => {
  unstable_batchedUpdates(() => {
    setUserInfo({
      ...info,
      isSignedIn: true,
    });
  });
};

export const exportData = (data) => {
  unstable_batchedUpdates(() => {
    setPsyhologiesList(data);
  });
};

export const setLastVisible = (data) => {
  unstable_batchedUpdates(() => {
    setQueryLastVisible(data);
  });
};

export const amountOfPsychologists = (
  query,
  collection,
  getDocs,
  firestore,
  data,
  count,
  collectionName
) => {
  const dataCollection = query(collection(firestore, collectionName));

  const querySnapshot = getDocs(dataCollection);

  const amount = querySnapshot.data().count;

  return amount;
};
