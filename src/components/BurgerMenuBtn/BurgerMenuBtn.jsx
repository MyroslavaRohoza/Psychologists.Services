import css from "./BurgerMenuBtn.module.css";
import { ReactSVG } from "react-svg";
import menu from "../../assets/icons/menu.svg";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { AuthNav } from "../AuthNav/AuthNav";

export default function BurgerMenuBtn() {
  const [open, setOpen] = useState(false);

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
        <div>
          <HeaderMenu />
          <AuthNav />
        </div>
      </Drawer>
    </>
  );
}
