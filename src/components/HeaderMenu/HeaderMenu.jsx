import { NavLink } from "react-router-dom";
import css from "./HeaderMenu.module.css";
import clsx from "clsx";
import { useBoundStore } from "../../zustand/store";
import { getUserInfo } from "../../zustand/selectors";

export const HeaderMenu = () => {
  const isSignedIn = useBoundStore(getUserInfo).isSignedIn;

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
      {isSignedIn && (
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites
        </NavLink>
      )}
    </div>
  );
};
