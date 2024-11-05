import css from "./Layout.module.css";
import { AppBar } from "../AppBar/AppBar";
import { useEffect } from "react";
import { authListener } from "../../firebase/authListener";

const Layout = ({ children }) => {
  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      <header className={`${css.header} container`}>
        <AppBar />
      </header>
      <main className={`container`}>{children}</main>
    </>
  );
};

export default Layout;
