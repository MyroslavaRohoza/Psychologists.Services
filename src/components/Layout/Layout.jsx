import css from "./Layout.module.css";
import { AppBar } from "../AppBar/AppBar";

const Layout = ({ children }) => {
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
