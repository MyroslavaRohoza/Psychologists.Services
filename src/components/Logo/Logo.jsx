import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={css.logo}>
      <Link to="/">
        <span className={css.logoAccent}>psychologists.</span>services
      </Link>
    </div>
  );
};
