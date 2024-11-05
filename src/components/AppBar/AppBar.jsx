import css from "./AppBar.module.css";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { Logo } from "../Logo/Logo";
import { AuthNav } from "../AuthNav/AuthNav";
import { useEffect, useState } from "react";
import BurgerMenuBtn from "../BurgerMenuBtn/BurgerMenuBtn";

export const AppBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={css.headerNav}>
      {width <= 768 ? (
        <>
          <Logo /> <BurgerMenuBtn />
        </>
      ) : (
        <>
          <span className={css.headerMenu}>
            <Logo /> <HeaderMenu />
          </span>
          <AuthNav />
        </>
      )}
    </nav>
  );
};
