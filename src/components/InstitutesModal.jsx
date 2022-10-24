import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import gif from "../img/InstitutosConfucioInfo-700px.png";

const style = {
    // display: "flex",
    margin: "auto",
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
//   border: "2px solid #000",
  boxShadow: 24,
  p: "32px 0",
  "&:focus-visible": {
    outline: "none",
  },
};

const buttonStyle = {
  position: "absolute",
  zIndex: 999,
  right: 20,
  bottom: 35,
  p: 3.5,
//   bgColor: "linear-gradient(-180deg, #00D775, #00BD68)",
  backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",
  borderRadius: 4,
  boxShadow: "rgba(0, 0, 0, 0.1) 0 2px 4px",
  color: "#FFFFFF",
  cursor: "pointer",
  height: 44,
  lineHeight: 1.2,
  textAlign: "center",
  width: "auto",
  border: 0,
  "&:hover": {
    background: "#00bd68",
  },
  '@media (max-width: 501px)': {
    bottom: "45vh",
    height: "auto",
    width: 130,
    lineHeight: 1,
    fontSize: "12px",
    p: 1.5,
  },
};

export const InstitutesModal = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} sx={buttonStyle}>
        Acerca de<br/>los Institutos
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={gif} alt="indicaciones institutos Confucio" />
        </Box>
      </Modal>
    </>
  );
};
