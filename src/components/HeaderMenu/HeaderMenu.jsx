import { NavLink } from "react-router-dom";
import css from "./HeaderMenu.module.css";
import clsx from "clsx";

export const HeaderMenu = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.headerMenu}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/psychologists" className={buildLinkClass}>
        Psychologists
      </NavLink>
    </div>
  );
};
