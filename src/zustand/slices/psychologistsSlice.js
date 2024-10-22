import { produce } from "immer";

export const psychologistsSlice = (set) => ({
  psychologists: {
    psychologistsList: null,
    selectedPsychologists: null,
    appointmentPsychologists: null,
  },

  setPsychologistsList: (value) =>
    set(
      produce((state) => {
        state.psychologists.psychologistsList = value;
      })
    ),

  setSelectedPsychologists: (selectedPsychologists) =>
    set(
      produce((state) => {
        state.psychologists.selectedPsychologists = selectedPsychologists; 
      })
    ),
  setAppointmentPsychologists: (appointmentPsychologists) =>
    set(
      produce((state) => {
        state.psychologists.appointmentPsychologists = appointmentPsychologists;
      })
    ),
});
