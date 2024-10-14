import { ref, get } from "firebase/database";
import { db } from "./firebase";
import { setPsyhologiesList } from "../zustand/selectors";
import { unstable_batchedUpdates } from "react-dom";

const getData = async () => {
  const dataRef = ref(db, "/");
  try {
    const psychologists = await get(dataRef);
    if (psychologists.exists()) {
      const data = psychologists.val();
      exportData(data);
    } else {
      console.log("No data available");
    }
  } catch (error) {
    throw new Error(error);
  }
};

function exportData(data) {
  unstable_batchedUpdates(() => {
    setPsyhologiesList(data);
  });
}

export default getData;
