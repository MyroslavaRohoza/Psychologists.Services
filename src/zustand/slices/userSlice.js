import { produce } from "immer";

export const initialState = {
  isSignedIn: false,
  displayName: "",
  accessToken: "",
  refreshToken: "",
  reloadUserInfo: {},
  validSince: null,
  uid: "",
};

export const userSlice = (set) => ({
  user: initialState,
  setUserInfo: (userInfo) =>
    set(
      produce((state) => {
        state.user = userInfo;
      })
    ),
});
