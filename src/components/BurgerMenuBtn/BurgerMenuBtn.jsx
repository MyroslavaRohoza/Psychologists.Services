import css from "./BurgerMenuBtn.module.css";
import { ReactSVG } from "react-svg";
import menu from "../../assets/icons/menu.svg";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useBoundStore } from "../../zustand/store";
import { getUserInfo } from "../../zustand/selectors";
import x_icon from "../../assets/icons/x.svg";

export default function BurgerMenuBtn() {
  const [open, setOpen] = useState(false);
  const isSignedIn = useBoundStore(getUserInfo).isSignedIn;

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (open) {
      rootElement.setAttribute("aria-hidden", "true");
    } else {
      rootElement.removeAttribute("aria-hidden");
    }
  }, [open]);

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
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "80%",
            backgroundColor: "var(--body-color)",
            border: "none",
          },
        }}
      >
        <div className={css.drawer}>
          <button onClick={toggleDrawer(false)} className={css.closeBtn}>
            <ReactSVG
              src={x_icon}
              beforeInjection={(svg) => {
                svg.setAttribute(
                  "style",
                  `padding: 0px; fill:var(--green-mint); color: var(--green-mint);`
                );
              }}
            />
          </button>
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
