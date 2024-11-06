import css from "./AppBar.module.css";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { Logo } from "../Logo/Logo";
import { AuthNav } from "../AuthNav/AuthNav";
import { useState } from "react";
import { useEffect } from "react";
import BurgerMenuBtn from "../BurgerMenuBtn/BurgerMenuBtn";

export const AppBar = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange); 
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <nav className={css.headerNav}>
      {isMobile ? (
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