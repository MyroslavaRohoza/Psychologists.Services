import { setPsyhologiesList } from "../zustand/selectors";
import { unstable_batchedUpdates } from "react-dom";

import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase.js";

// console.log(psychologists);
// const uploadDataToFirestore = async () => {
//   try {
//     console.log("Firestore reference:", firestore);
//     const psychologistsCollection = collection(firestore, "psychologists");

//     for (const user of psychologists) {
//       await addDoc(psychologistsCollection, user);
//     }
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// uploadDataToFirestore();

export const fetchPsychologists = async () => {
  try {
    const psychologistsCollection = collection(firestore, "psychologists");

    const querySnapshot = await getDocs(psychologistsCollection);
    const psychologistsData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    console.log("querySnapshot", querySnapshot);

    exportData(psychologistsData);
  } catch (error) {
    throw new Error(error);
  }
};

// fetchPsychologists();

function exportData(data) {
  unstable_batchedUpdates(() => {
    setPsyhologiesList(data);
  });
}
