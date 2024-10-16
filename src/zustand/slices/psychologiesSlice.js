export const psychologiesSlice = (set) => ({
  psyhologiesList: null,
  selectedPsyhologies: null,
  appointmentPsychologists: null,
  setPsyhologiesList: (psyhologiesList) =>
    set((state) => ({
      psyhologiesList: (state.psyhologiesList = psyhologiesList),
    })),
  SetSelectedPsyhologies: (psyhologiesList) =>
    set((state) => ({
      psyhologiesList: (state.psyhologiesList = psyhologiesList),
    })),
  SetAppointmentPsychologists: (appointmentPsychologists) =>
    set((state) => ({
      appointmentPsychologists: (state.appointmentPsychologists =
        appointmentPsychologists),
    })),
});

