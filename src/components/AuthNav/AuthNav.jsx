import css from "./AuthNav.module.css";
import GreenBtn from "../GreenBtn/GreenBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import { setModalName, setOpen } from "../../zustand/selectors";

export const AuthNav = () => {
 const onLoginBtnClick = () => {
   setOpen(true);
   setModalName("LogIn");
  };
  
    const onRegistrationBtnClick = () => {
      setOpen(true);
      setModalName("Register");
    };

  return (
    <div className={css.headerNav}>
      <LoginBtn onClick={onLoginBtnClick}>Log In</LoginBtn>
      <GreenBtn padding="14px 40px" onClick={onRegistrationBtnClick}>Registration</GreenBtn>
    </div>
  );
};
