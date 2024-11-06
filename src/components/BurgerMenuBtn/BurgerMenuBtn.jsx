import css from "./BurgerMenuBtn.module.css";
import { ReactSVG } from "react-svg";
import menu from "../../assets/icons/menu.svg";
import { useState } from "react";
import { Drawer } from "@mui/material";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useBoundStore } from "../../zustand/store";
import { getUserInfo } from "../../zustand/selectors";

export default function BurgerMenuBtn() {
  const [open, setOpen] = useState(false);
  const isSignedIn = useBoundStore(getUserInfo).isSignedIn;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };
  return (
    <>
      <button onClick={toggleDrawer(true)} className={css.burgerMenuBtn}>
        <ReactSVG
          src={menu}
          beforeInjection={(svg) => {
            svg.setAttribute(
              "style",
              `padding: 0px; fill:var(--green-mint); color: var(--green-mint);`
            );
          }}
        />
      </button>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <div className={css.drawer}>
          <div className={css.menuContainer}>
            <h2>Navigation menu</h2>
            <HeaderMenu />
          </div>
          <div className={css.menuContainer}>
            {isSignedIn ? (
              <h2>Wellcome!</h2>
            ) : (
              <h2>Do you want to choose psychologists?</h2>
            )}
            <AuthNav />
          </div>
        </div>
      </Drawer>
    </>
  );
}
