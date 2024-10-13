import { setModalName, setOpen } from "../../zustand/selectors";
import css from "./LoginBtn.module.css";
const LoginBtn = ({ children, onClick }) => {
  return (
    <button className={`btnText ${css.btn} ${css.textColor}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoginBtn;
