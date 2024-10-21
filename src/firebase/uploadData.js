import { setPsyhologiesList } from "../zustand/selectors";
import { unstable_batchedUpdates } from "react-dom";

import { addDoc, collection, getCountFromServer, getDocs, limit, orderBy, query } from "firebase/firestore";
import { firestore } from "./firebase.js";


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
    const psychologistsCollection = query(
      collection(firestore, "psychologists"),
      // limit(3),
       orderBy("name", "asc")
    );


    // const psychologistsCollection = collection(firestore, "psychologists");

    const querySnapshot = await getDocs(psychologistsCollection);
    const psychologistsData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    console.log("lastVisible", lastVisible);
    const count = await getCountFromServer(psychologistsCollection);

    console.log('COUNT',count.data().count);

    exportData(psychologistsData);
  } catch (error) {
    throw new Error(error);
  }
};

function exportData(data) {
  unstable_batchedUpdates(() => {
    setPsyhologiesList(data);
  });
}
