import { create } from "zustand";

export const store = create((set) => ({
  psyhologiesList: null,
  setPsyhologyList: (psyhologiesList) => set({ psyhologiesList }),
}));
