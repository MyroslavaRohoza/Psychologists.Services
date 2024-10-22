import { create } from "zustand";
import { modalsSlice } from "./slices/modalsSlice";
import { psychologiesSlice } from "./slices/psychologiesSlice";
import { userSlice } from "./slices/userSlice";
import { persist } from "zustand/middleware";
import { querySlice } from "./slices/query";

export const useBoundStore = create(
  persist((...a) => ({
    ...modalsSlice(...a),
    ...psychologiesSlice(...a),
    ...userSlice(...a),
    ...psychologiesSlice(...a),
    ...querySlice(...a),
  })),
  {
    name: "user-storage",
    getStorage: () => localStorage,
    // partialize: (state) => ({ user: state.user })
  }
);
