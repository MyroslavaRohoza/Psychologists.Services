import css from "./MainModal.module.css";
import { useCallback, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { ReactSVG } from "react-svg";
import x_icon from "../../assets/icons/x.svg";
import { useBoundStore } from "../../zustand/store";
import { getOpen, setModalName, setOpen } from "../../zustand/selectors";

const MainModal = ({ children }) => {
  const open = useBoundStore(getOpen);

  useEffect(() => {
    const rootElement = document.getElementById("root"); 
    if (open) {
      rootElement.setAttribute("aria-hidden", "true");
    } else {
      rootElement.removeAttribute("aria-hidden");
    }
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setModalName("");
  }, [setOpen, setModalName]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Fade in={open} timeout={{ enter: 300, exit: 300 }}>
        <Box
          sx={{
            bgcolor: "var(--light-gray)",
            p: "64px",
            borderRadius: "30px",
            outline: "none",
            position: "relative",
          }}
        >
          <button className={css.closeBtn} onClick={handleClose}>
            <ReactSVG
              src={x_icon}
              beforeInjection={(svg) => {
                svg.setAttribute(
                  "style",
                  "width: 32px; height: 32px; color: var(--dark-olive);"
                );
              }}
            />
          </button>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default MainModal;
