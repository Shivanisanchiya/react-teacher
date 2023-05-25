import React, { useState } from "react";
import BoxComponent from "../Box/BoxComponent";
import Enquiry_form from "../Enquiry/Enquiry_form";
import Head from "../Header/header";
import Teacher_form from "../Teacher/Teacher_form";
import Title from "../Title/Title";
// import FormDialog from "./Popup";
import { Grid, TextField, Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";

import "./home.css";

function Home() {
  const [name, setName] = useState("");

  async function save(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8085/teachers", {
        firstName: name,
      });
      alert("success");
      setName("");
    } catch (err) {
      alert("failed");
      console.log(err);
    }
  }

  return (
    <div className="home">
      <Head />
      <br />
      <br />
      <br />
      <br />
      <Title />

      <div
        className="bg_image"
        style={{
          backgroundImage: "url(/project_image.png)",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
          height: "56vw",
          width: "100vw",
        }}
      >
        <BoxComponent />
        <Teacher_form />
        <Enquiry_form />

        <form>
          <Grid xs={12} sm={6} item>
            <TextField
              placeholder="Enter first name"
              label="First Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={save}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Home;
