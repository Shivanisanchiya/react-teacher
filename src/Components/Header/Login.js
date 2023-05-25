import {
  Container,
  Button,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Signup from "./Signup";

const Login = ({ handleChange }) => {
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const [open, setOpen] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="login">
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "10vh" }}
        >
          <form style={{ padding: "2vw" }}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  type="email"
                  fullWidth
                  label="Enter your email"
                  placeholder="Email Address"
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item>
                <TextField
                  type={values.showPass ? "text" : "password"}
                  fullWidth
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handlePassVisibilty}
                          aria-label="toggle password"
                          edge="end"
                        >
                          {values.showPass ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item>
                <Button type="submit" fullWidth variant="contained">
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Typography>
                  <Link href="#">Forgot password ?</Link>
                </Typography>
                <Typography>
                  {" "}
                  Do you have an account ?
                  {/* <Button
                    variant="contained"
                    color="inherit"
                    onClick={handleClickOpen}
                    style={{ height: "2.5vw", width: "5vw", fontSize: "1vw" }}
                  >
                    Signup
                  </Button> */}
                  <Link onClick={handleClickOpen}>Signup</Link>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle
                      style={{ justifyContent: "center", textAlign: "center" }}
                    >
                      Signup
                    </DialogTitle>
                    <DialogContent>
                      <Signup />
                    </DialogContent>
                  </Dialog>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
