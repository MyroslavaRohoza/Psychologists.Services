import css from "./AuthNav.module.css";
import { useCallback } from "react";
import GreenBtn from "../GreenBtn/GreenBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import {
  getUserInfo,
  setModalName,
  setOpen,
  setUserInfo,
} from "../../zustand/selectors";
import { useBoundStore } from "../../zustand/store";
import UserName from "../UserName/UserName";
import { logoutUser } from "../../firebase/logout";
import { initialState } from "../../zustand/slices/userSlice";
// import { logoutUser } from "../../firebase/logout";
// import { initialState } from "../../zustand/slices/userSlice";

export const AuthNav = () => {
  const isSignedIn = useBoundStore(getUserInfo).isSignedIn;
  const displayName = useBoundStore(getUserInfo).displayName;

  const onLoginBtnClick = useCallback(() => {
    setOpen(true);
    setModalName("LogIn");
  }, [setOpen, setModalName]);

  const onRegistrationBtnClick = useCallback(() => {
    setOpen(true);
    setModalName("Register");
  }, [setOpen, setModalName]);

  const logOut = useCallback(() => {
    logoutUser();
    setUserInfo(initialState);
  });

  return (
    <div className={`${css.headerNav} ${!isSignedIn ? css.addGap : ""}`}>
      {isSignedIn ? (
        <>
          <UserName name={typeof displayName === "string" && displayName} />
          <LoginBtn onClick={logOut}>Log Out</LoginBtn>
        </>
      ) : (
        <>
          <LoginBtn onClick={onLoginBtnClick}>Log In</LoginBtn>
          <GreenBtn padding="14px 40px" onClick={onRegistrationBtnClick}>
            Registration
          </GreenBtn>
        </>
      )}
    </div>
  );
};
