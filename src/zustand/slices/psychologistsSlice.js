import { produce } from "immer";

export const psychologistsSlice = (set) => ({
  psychologists: {
    psychologistsList: null,
    selectedPsychologists: [],
    appointmentPsychologists: null,
  },

  setPsychologistsList: (value) =>
    set(
      produce((state) => {
        state.psychologists.psychologistsList = value;
      })
    ),

  
  addPortionsData: (value) =>
    set(
      produce((state) => {
        state.psychologists.psychologistsList= [...state.psychologists.psychologistsList, ...value];
      })
    ),


  setSelectedPsychologists: (psychologistId) =>
    set(
      produce((state) => {
        const selectedPsychologists = state.psychologists.psychologistsList.find(
          (psychologist) => psychologist.id === psychologistId
        )
        state.psychologists.selectedPsychologists.push(selectedPsychologists);
      })
    ),
  setAppointmentPsychologists: (appointmentPsychologists) =>
    set(
      produce((state) => {
        state.psychologists.appointmentPsychologists = appointmentPsychologists;
      })
    ),
});
