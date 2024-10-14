export const userSlice = (set) => ({
  user: {
    isSignedIn: false,
    displayName: "",
    accessToken: "",
    refreshToken: "",
    reloadUserInfo: {},
    validSince: null,
    uid: "",
  },
  setUserInfo: (userInfo) =>
    set((state) => ({
      user: (state.user = {
        ...userInfo,
      }),
    })),
});
console.log(userSlice);