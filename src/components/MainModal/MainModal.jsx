import css from "./MainModal.module.css";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { ReactSVG } from "react-svg";
import x_icon from "../../assets/icons/x.svg";
import { useState } from "react";

const MainModal = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      //   onClose={handleClose}
      //   aria-labelledby="parent-modal-title"
      //   aria-describedby="parent-modal-description"
      closeAfterTransition
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Fade
        in={open}
        onEnter={() => console.log("Opening modal...")}
        onExited={() => {
          console.log("Modal closed.");
        }}
        timeout={{ enter: 300, exit: 300 }}      
      >
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
