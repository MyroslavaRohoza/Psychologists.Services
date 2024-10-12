import { ref, get } from "firebase/database";
import { db } from "./firebase";
import { store } from "./zustand/store";

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
  store.getState().setPsyhologyList(data);
}

export default getData;