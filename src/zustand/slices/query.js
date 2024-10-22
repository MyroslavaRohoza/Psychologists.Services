export const querySlice = (set) => ({
  query: {
    limit: 3,
    orderBy: "",
    lastVisible: null,
    amountOfPsychologists: null,
  },
  setQueryInfo: (value) => set((state) => ({ query: (state.query = value) })),
  setQueryLimit: (value) =>
    set((state) => ({
      query: (state.query = { ...state.query, limit: value }),
    })),
  setQueryOrderBy: (value) =>
    set((state) => ({
      query: (state.query = { ...state.query, orderBy: value }),
    })),
  setQueryLastVisible: (value) =>
    set((state) => ({
      query: (state.query = { ...state.query, lastVisible: value }),
    })),
  setQueryAmountOfPsychologists: (value) =>
    set((state) => ({
      query: (state.query = { ...state.query, amountOfPsychologists: value }),
    })),
});
