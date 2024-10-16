import { useBoundStore } from "./store";

export const getOpen = (state) => state.open;

export const getModalName = (state) => state.modalName;

export const getPsyhologiesList = (state) => state.psyhologiesList;

export const getUserInfo = (state) => state.user;

export const getAppointmentPsychologists = (state) =>
  state.appointmentPsychologists;

export const getSelectedPsyhologies = (state) => state.selectedPsyhologies;

export const setPsyhologiesList = useBoundStore.getState().setPsyhologiesList;

export const setModalName = useBoundStore.getState().setModalName;

export const setOpen = useBoundStore.getState().setOpen;

export const setUserInfo = useBoundStore.getState().setUserInfo;

export const setSelectedPsyhologies =
  useBoundStore.getState().setSelectedPsyhologies;

export const setAppointmentPsychologists =
  useBoundStore.getState().SetAppointmentPsychologists;
