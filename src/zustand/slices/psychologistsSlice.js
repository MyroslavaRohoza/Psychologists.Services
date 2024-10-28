import { produce } from "immer";

export const psychologistsSlice = (set) => ({
  psychologists: {
    psychologistsList: null,
    psychologistsListLength: 0,
    selectedPsychologists: [],
    selectedPsychologistTemp: new Map(),
    appointmentPsychologists: null,
    selectedPsychologistsIds: [],
  },

  setPsychologistsList: (value) =>
    set(
      produce((state) => {
        state.psychologists.psychologistsList = value;
        state.psychologists.psychologistsListLength = value.length;
      })
    ),

  addPortionsData: (value) =>
    set(
      produce((state) => {
        state.psychologists.psychologistsList.push(...value);
        state.psychologists.psychologistsListLength += value.length;
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
      const isSelectedPsychologist =
        state.psychologists.selectedPsychologistTemp.has(psychologistId);
      if (isSelectedPsychologist) {
        state.psychologists.selectedPsychologistTemp.delete(psychologistId);
      } else {
        state.psychologists.selectedPsychologistTemp.set(
          psychologistId,
          selectedPsychologist
        );
      }

      const values = state.psychologists.selectedPsychologistTemp.values();

      state.psychologists.selectedPsychologists = [...values];

      state.psychologists.selectedPsychologistsIds = [
        ...state.psychologists.selectedPsychologistTemp.keys(),
      ];
    }),

  setAppointmentPsychologists: (appointmentPsychologists) =>
    set(
      produce((state) => {
        state.psychologists.appointmentPsychologists = appointmentPsychologists;
      })
    ),
});
