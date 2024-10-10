import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const MainModal = ({ children }) => {
  return (
    <Modal
      open={true}
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
      >
        <Box
          sx={{
            bgcolor: "var(--light-gray)",
            p: "64px",
            borderRadius: "30px",
            outline: "none",
          }}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default MainModal;
