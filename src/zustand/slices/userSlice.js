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
    set((state) => ({
      user: (state.user = {
        ...userInfo,
      }),
    })),
});
console.log(userSlice);