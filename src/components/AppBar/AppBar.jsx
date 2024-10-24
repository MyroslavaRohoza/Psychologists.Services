import css from "./AppBar.module.css";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { Logo } from "../Logo/Logo";
import { AuthNav } from "../AuthNav/AuthNav";

export const AppBar = () => {
  return (
    <nav className={css.headerNav}>
      <span className={css.headerMenu}>
        <Logo /> <HeaderMenu />
      </span>
      <AuthNav />
    </nav>
  );
};
