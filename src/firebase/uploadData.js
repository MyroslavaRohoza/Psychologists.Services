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
    const psychologistsCollection = createQuery(
      limitQuery,
      order,
      "psychologists"
    );

    const querySnapshot = await getDocs(psychologistsCollection);

    const psychologistsData = unpackData(querySnapshot);
    const lastVisible = findLastDoc(querySnapshot);

    setLastVisible(lastVisible);

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
  const nextQuery = createQuery(
    limitQuery,
    order,
    "psychologists",
    lastVisible
  );

  const querySnapshot = await getDocs(nextQuery);

  const psychologistsPortionData = unpackData(querySnapshot);

  addPortionsData(psychologistsPortionData);

  const lastVisibleDoc = findLastDoc(querySnapshot);
  setLastVisible(lastVisibleDoc);
};

const createQuery = (limitQuery, order, collectionName, lastVisible) => {
  const constraints = [
    collection(firestore, collectionName),
    limit(limitQuery),
  ];

  if (Array.isArray(order.orderBy)) {
    constraints.push(orderBy(...order.orderBy));
  } else if (Array.isArray(order.where)) {
    constraints.push(where(...order.where));
  }
  if (lastVisible) {
    constraints.push(startAfter(lastVisible));
  }

  return query(...constraints);
};

const unpackData = (data) => {
  return data.docs.map((doc) => ({
    ...doc.data(),
  }));
};

const findLastDoc= (data) => {
  return data.docs[data.docs.length - 1];
};