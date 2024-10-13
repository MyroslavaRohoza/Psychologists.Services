export const psychologiesSlice = (set) => ({
  psyhologiesList: null,
  setPsyhologiesList: (psyhologiesList) =>
    set((state) => ({ psyhologiesList: (state.psyhologiesList = psyhologiesList) })),
});
