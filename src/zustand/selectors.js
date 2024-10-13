import { useBoundStore } from "./store";

export const getOpen = (state) => state.open;

export const getModalName = (state) => state.modalName;

export const getPsyhologiesList = (state) => state.psyhologiesList;

export const setPsyhologiesList = useBoundStore.getState().setPsyhologiesList; 

export const setModalName = useBoundStore.getState().setModalName;

export const setOpen = useBoundStore.getState().setOpen;