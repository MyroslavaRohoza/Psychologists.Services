import { produce } from "immer";

export const psychologistsSlice = (set) => ({
  psychologists: {
    psychologistsList: null,
    selectedPsychologists: [],
    selectedPsychologistTemp: new Set(),  
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
        state.psychologists.psychologistsList = [
          ...state.psychologists.psychologistsList,
          ...value,
        ];
      })
    ),

  setSelectedPsychologists: (psychologistId) =>
    set(
      (state) => {
        const selectedPsychologist = state.psychologists.psychologistsList.find(
          (psychologist) => psychologist.id === psychologistId
        );

    
        state.psychologists.selectedPsychologistTemp.add(selectedPsychologist);

      
        return {
          psychologists: {
            ...state.psychologists,
            selectedPsychologists: Array.from(state.psychologists.selectedPsychologistTemp),  // Преобразуем Set в массив
          },
        };
      }
    ),

  setAppointmentPsychologists: (appointmentPsychologists) =>
    set(
      produce((state) => {
        state.psychologists.appointmentPsychologists = appointmentPsychologists;
      })
    ),
});
