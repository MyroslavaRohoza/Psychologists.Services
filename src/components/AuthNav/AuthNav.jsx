import css from "./AuthNav.module.css";
import GreenBtn from "../GreenBtn/GreenBtn";
import LoginBtn from "../LoginBtn/LoginBtn";

export const AuthNav = () => {
  return (
    <div className={css.headerNav}>
      <LoginBtn>Log In</LoginBtn>
      <GreenBtn padding="14px 40px">Registration</GreenBtn>
    </div>
  );
};
