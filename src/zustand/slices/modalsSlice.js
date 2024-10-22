import { produce } from "immer";
export const modalsSlice = (set) => ({
  modal: {
    open: false,
    modalName: "",
  },
  setOpen: (value) =>
    set(
      produce((state) => {
        state.modal.open = value;
      })
    ),
  setModalName: (name) =>
    set(
      produce((state) => {
        state.modal.modalName = name;
      })
    ),
});
