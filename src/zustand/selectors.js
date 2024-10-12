import { store } from "./store";

const createSelectors = (store) => ({
  psyhologies: {
    getPsyhologyList: () => store.getState().psyhologiesList,
  },
});

export const usePsyhologiesStore = createSelectors(store);
