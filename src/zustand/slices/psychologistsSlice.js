import { produce } from "immer";

export const psychologistsSlice = (set) => ({
  psychologists: {
    psychologistsList: null,
    selectedPsychologists: [],
    selectedPsychologistTemp: new Map(),
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
    set((state) => {
      const selectedPsychologist = state.psychologists.psychologistsList.find(
        (psychologist) => psychologist.id === psychologistId
      );

      if (!(state.psychologists.selectedPsychologistTemp instanceof Map)) {
        state.psychologists.selectedPsychologistTemp = new Map(
          ...state.psychologists.selectedPsychologistTemp
        );
      }
      const arr = [];
      state.psychologists.selectedPsychologistTemp.set(
        psychologistId,
        selectedPsychologist
      );

      for (const [key, value] of state.psychologists.selectedPsychologistTemp) {
        arr.push(value);
      }

      state.psychologists.selectedPsychologists = [...arr];
    }),

  setAppointmentPsychologists: (appointmentPsychologists) =>
    set(
      produce((state) => {
        state.psychologists.appointmentPsychologists = appointmentPsychologists;
      })
    ),
});
