import { setPsyhologiesList } from "../zustand/selectors";
import { unstable_batchedUpdates } from "react-dom";

import { addDoc, collection, getCountFromServer, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { firestore } from "./firebase.js";
import { exportData, setLastVisible } from "../js/utilities.js";


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

export const fetchPsychologists = async (limitQuery, order) => {
  try {
    const psychologistsCollection = query(
      collection(firestore, "psychologists"),
       limit(limitQuery),
       orderBy("name", order)
    );


    // const psychologistsCollection = collection(firestore, "psychologists");

    const querySnapshot = await getDocs(psychologistsCollection);
    const psychologistsData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    setLastVisible(lastVisible);
 
    const count = await getCountFromServer(psychologistsCollection);

    console.log('COUNT',count.data().count);

    exportData(psychologistsData);
  } catch (error) {
    throw new Error(error);
  }
};

const loadFilteredData = async (data) => { 
   const nextQuery = query(
     collection(firestore, "psychologists"), startAfter(lastVisible),
  );

      const querySnapshot = await getDocs(nextQuery);
   const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
 
}



