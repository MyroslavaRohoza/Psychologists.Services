import { setPsyhologiesList } from "../zustand/selectors";
import { unstable_batchedUpdates } from "react-dom";

import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { firestore } from "./firebase.js";
import { exportData, setLastVisible, setPsychologistsAmount } from "../js/utilities.js";

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

    // const amountPerPage = await getCountFromServer(psychologistsCollection);

    // // console.log("COUNT", amountPerPage.data().count);
    const amount = await amountOfPsychologists("psychologists");
    
    setPsychologistsAmount(amount);

    exportData(psychologistsData);
  } catch (error) {
    throw new Error(error);
  }
};
export const amountOfPsychologists = async (collectionName) => {
  try {
    const dataCollectionQuery = query(collection(firestore, collectionName));
    const countSnapshot = await getCountFromServer(dataCollectionQuery); // Отримуємо кількість документів з сервера

    const amount = countSnapshot.data().count;

    return amount;
  } catch (error) {
    throw new Error(error);
  }
};

// const loadFilteredData = async (data) => {
//   const nextQuery = query(
//     collection(firestore, "psychologists"),
//     startAfter(lastVisible)
//   );

//   const querySnapshot = await getDocs(nextQuery);
//   const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
// };
