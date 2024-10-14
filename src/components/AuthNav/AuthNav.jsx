import css from "./AuthNav.module.css";
import { useCallback } from "react";
import GreenBtn from "../GreenBtn/GreenBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import { getUserInfo, setModalName, setOpen } from "../../zustand/selectors";
import { useBoundStore } from "../../zustand/store";
import UserName from "../UserName/UserName";

export const AuthNav = () => {
  const isSignedIn = useBoundStore(getUserInfo).isSignedIn;
  const displayName = useBoundStore(getUserInfo).displayName;
;
  console.log(displayName);

  console.log("signed in", isSignedIn);

  const onLoginBtnClick = useCallback(() => {
    setOpen(true);
    setModalName("LogIn");
  }, [setOpen, setModalName]);

  const onRegistrationBtnClick = useCallback(() => {
    setOpen(true);
    setModalName("Register");
  }, [setOpen, setModalName]);

  return (
    <div className={css.headerNav}>
      {isSignedIn ? (
        <>
          <UserName name={displayName}/>
          <LoginBtn>Log Out</LoginBtn>
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
