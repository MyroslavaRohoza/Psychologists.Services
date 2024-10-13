import { create } from "zustand";
import { modalsSlice } from "./slices/modalsSlice";
import { psychologiesSlice } from "./slices/psychologiesSlice";

export const useBoundStore = create((...a) => ({
  ...modalsSlice(...a),
  ...psychologiesSlice(...a),
}));
