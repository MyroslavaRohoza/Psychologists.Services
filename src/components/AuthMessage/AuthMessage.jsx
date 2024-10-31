import css from "./AuthMessage.module.css";
import FormTitle from "../FormTitle/FormTitle";
import GreenBtn from "../GreenBtn/GreenBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import { useCallback } from "react";
import { setModalName, setOpen } from "../../zustand/selectors";

const AuthMessage = () => {
  const onLoginBtnClick = useCallback(() => {
    setModalName("LogIn");
    setOpen(true);
  });

  const onRegistrationBtnClick = useCallback(() => {
    setModalName("Register");
    setOpen(true);
  });
  return (
    <>
      <FormTitle>
        This feature is
        <br /> for authorised users only
      </FormTitle>
      <div className={css.btnContainer}>
        <LoginBtn onClick={onLoginBtnClick}>Log in</LoginBtn>
        <GreenBtn padding="14px 40px" onClick={onRegistrationBtnClick}>
          Register
        </GreenBtn>
      </div>
    </>
  );
};

export default AuthMessage;
