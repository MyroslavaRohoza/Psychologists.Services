import { ref, get } from "firebase/database";
import { db } from "./firebase";
import { setPsyhologiesList } from "../zustand/selectors";

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
  setPsyhologiesList(data);
}

export default getData;
