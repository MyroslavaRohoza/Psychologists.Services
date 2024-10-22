import { produce } from "immer";

export const querySlice = (set) => ({
  query: {
    limit: 3,
    filter: {
      orderBy: "",
      where: "",
    },
    lastVisible: null,
    amountOfPsychologists: null,
  },
  setQueryInfo: (value) =>
    set(
      produce((state) => {
        state.query = value;
      })
    ),
  setQueryLimit: (value) =>
    set(
      produce((state) => {
        state.query.limit = value; 
      })
    ),
  setQueryOrderBy: (value) =>
    set(
      produce((state) => {
        state.query.filter.orderBy = value; 
      })
    ),
  setQueryLastVisible: (value) =>
    set(
      produce((state) => {
        state.query.lastVisible = value;
      })
    ),
  setQueryAmountOfPsychologists: (value) =>
    set(
      produce((state) => {
        state.query.amountOfPsychologists = value; 
      })
    ),
  setQueryWhere: (value) =>
    set(
      produce((state) => {
        state.query.filter.where = value; 
      })
    ),
});
