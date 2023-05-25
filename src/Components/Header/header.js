import * as React from "react";
import "./header.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import FormDialog from "../Home/Popup";
import Sign_popup from "../Home/Sign_popup";
import { NavLink } from "react-router-dom";

function Head() {
  const [open, setOpen] = React.useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <nav>
        <div className="head">
          <ul className="nav_menu">
            <Sign_popup />

            <FormDialog />

            <MailSharpIcon
              style={{ color: "white", height: "2.5vw", width: "2.5vw" }}
            />

            <NavLink to="/H&D/Contact us">
              <LocalPhoneSharpIcon
                style={{ color: "white", height: "2.5vw", width: "2.5vw" }}
              />
            </NavLink>
          </ul>
        </div>
      </nav>
    </Container>
  );
}

export default Head;
