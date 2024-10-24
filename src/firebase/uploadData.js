import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { firestore } from "./firebase.js";
import {
  exportData,
  setLastVisible,
  setPsychologistsAmount,
} from "../js/utilities.js";
import { addPortionsData } from "../zustand/selectors.js";

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
      order.orderBy ? orderBy(...order.orderBy) : where(...order.where)
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

    console.log("data", psychologistsData);
    exportData(psychologistsData);
  } catch (error) {
    throw new Error(error);
  }
};
export const amountOfPsychologists = async (collectionName) => {
  try {
    const dataCollectionQuery = query(collection(firestore, collectionName));
    const countSnapshot = await getCountFromServer(dataCollectionQuery);
    const amount = countSnapshot.data().count;

    return amount;
  } catch (error) {
    throw new Error(error);
  }
};

export const loadFilteredData = async (lastVisible, order, limitQuery) => {
  const nextQuery = query(
    collection(firestore, "psychologists"),
    order.orderBy ? orderBy(...order.orderBy) : where(...order.where),
    startAfter(lastVisible),
    limit(limitQuery)
  );

  const querySnapshot = await getDocs(nextQuery);

  const psychologistsPortionData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));

  addPortionsData(psychologistsPortionData);

  const last = querySnapshot.docs[querySnapshot.docs.length - 1];
  setLastVisible(last);
};
