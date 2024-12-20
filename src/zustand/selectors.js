import { useBoundStore } from "./store";

export const getOpen = (state) => state.modal.open;

export const getModalName = (state) => state.modal.modalName;

export const getIsLoading = (state) => state.psychologists.isLoading;

export const getPsyhologists = (state) => state.psychologists;

export const getUserInfo = (state) => state.user;

export const getAppointmentPsychologists = (state) =>
  state.psychologists.appointmentPsychologists;

export const getSelectedPsyhologists = (state) =>
  state.psychologists.selectedPsychologists;

export const getQueryInfo = (state) => state.query;

export const getFilter = (state) => state.query.filter;

export const getSelectedPsychologist = (state) =>
  state.psychologists.isSelectedPsychologist;

export const setPsyhologistsList =
  useBoundStore.getState().setPsychologistsList;

export const setModalName = useBoundStore.getState().setModalName;

export const setOpen = useBoundStore.getState().setOpen;

export const setUserInfo = useBoundStore.getState().setUserInfo;

export const setSelectedPsyhologies =
  useBoundStore.getState().setSelectedPsyhologists;

export const setAppointmentPsychologists =
  useBoundStore.getState().setAppointmentPsychologists;

export const setQueryInfo = useBoundStore.getState().setQueryInfo;

export const setQueryLimit = useBoundStore.getState().setQueryLimit;

export const setQueryOrderBy = useBoundStore.getState().setQueryOrderBy;

export const setQueryWhere = useBoundStore.getState().setQueryWhere;

export const setQueryLastVisible = useBoundStore.getState().setQueryLastVisible;

export const setQueryAmountOfPsychologists =
  useBoundStore.getState().setQueryAmountOfPsychologists;

export const addPortionsData = useBoundStore.getState().addPortionsData;

export const setSelectedPsychologists =
  useBoundStore.getState().setSelectedPsychologists;

export const setIsLoading = useBoundStore.getState().setIsLoading;

export const selectedPsychologistsIds = (state) =>
  state.psychologists.selectedPsychologistsIds;
