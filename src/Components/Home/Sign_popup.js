import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Signup from "../Header/Signup";

export default function Sign_popup() {
  const [open, setOpen] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="inherit"
        onClick={handleClickOpen}
        style={{ height: "2.5vw", width: "5vw", fontSize: "1vw" }}
      >
        Signup
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ justifyContent: "center", textAlign: "center" }}>
          Signup
        </DialogTitle>
        <DialogContent>
          <Signup />
        </DialogContent>
      </Dialog>
    </div>
  );
}
