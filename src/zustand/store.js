import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { modalsSlice } from "./slices/modalsSlice";
import { userSlice } from "./slices/userSlice";
import { querySlice } from "./slices/querySlice";
import { psychologistsSlice } from "./slices/psychologistsSlice";

export const useBoundStore = create(
  persist(
    immer((...a) => ({
      ...modalsSlice(...a),
      ...psychologistsSlice(...a),
      ...userSlice(...a),
      ...querySlice(...a),
    })),
    {
      name: "user",
      getStorage: () => localStorage,
    }
  )
);
