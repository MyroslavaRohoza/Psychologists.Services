export const modalsSlice = (set) => ({
  open: false,
  modalName: "",

  setOpen: (value) => set((state) => ({ open: (state.open = value) })),
  setModalName: (name) =>
    set((state) => ({ modalName: (state.modalName = name) })),
});
