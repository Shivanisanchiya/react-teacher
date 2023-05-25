import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Grid, TextField, Card, CardContent } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import helper from "../../services/helper";
import axios from "axios";

import "./Teacher.css";

const { useState } = React;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Teacher_form() {
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpwd, setConfirmpwd] = useState("");

  async function save(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8085/teachers", {
        firstName: name,
        lastName: lastname,
        email: email,
        phone: phone,
        password: password,
        confirmedPassword: confirmpwd,
      });
      alert("success");
      setName("");
      setlastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmpwd("");
    } catch (err) {
      alert("failed");
      console.log(err);
    }
  }

  // const[teacher,setTeacher] = useState({
  //   firstName:"",
  //   lastName:"",
  //   email:"",
  //   phone:"",
  //   password:"",
  //   confirmedPassword:""

  // })

  // const{firstName,lastName,email,phone,password,confirmedPassword}=teacher

  // const onInputChange=(e) =>{
  //    setTeacher({...teacher,[e.target.firstName]:e.target.value})
  // }

  // const getData=(e)=>{
  //   console.warn(e.target.value)
  // }

  //  const [value, setValue] = useState("");
  //  const handleValue = (e) => {
  //    console.log(`typed => ${e.target.value}`);
  //    setValue(e.target.value);
  //  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [checked, setChecked] = React.useState(false);

  //   const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  // const handleChange=()=>{
  // setChecked(!checked)}

  //  const handleChange=(data)=>{
  //  console.log(data)}

  const [experience, setexperience] = React.useState("");

  const handleChange = (event) => {
    setexperience(event.target.value);
  };

  return (
    <div className="teacher_form">
      <div className="teacher_details">
        <Button
          variant="contained"
          color="inherit"
          size="large"
          style={{ height: "4vw", width: "30vw", fontSize: "1.2vw" }}
          onClick={handleClickOpen}
        >
          Want to be a Teacher
        </Button>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative" }}
          style={{ backgroundImage: "linear-gradient(-90deg,#831fe0,#410f70)" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Teacher Registration
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="teacherform">
          <Grid
            style={{
              backgroundImage: "url(/teacherimage.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "100vw",
              height: "50vw",
            }}
          >
            <Card style={{ maxWidth: 450, padding: "3vw", margin: "0 auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Teacher Section
                </Typography>

                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Enter first name"
                        label="First Name"
                        // value={firstName}
                        variant="outlined"
                        name="firstName"
                        fullWidth
                        required
                        // onChange={getData}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Enter last name"
                        label="Last Name"
                        variant="outlined"
                        value={lastname}
                        onChange={(e) => {
                          setlastName(e.target.value);
                        }}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        name="email"
                        // value={email}
                        // onChange={getData}
                        fullWidth
                        // required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        placeholder="Enter phone number"
                        label="Phone"
                        variant="outlined"
                        name="phone"
                        // value={phone}
                        // onChange={getData}
                        fullWidth
                        // required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        // required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        // value={password}
                        // onChange={getData}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        // required
                        fullWidth
                        id="password_confirmation"
                        name="confirmedPassword"
                        label="Confirm Password"
                        type="password"
                        // value={confirmedPassword}
                        // onChange={getData}
                        value={confirmpwd}
                        onChange={(e) => {
                          setConfirmpwd(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {/* <FormControlLabel
                  control={
                  <Checkbox
                  
                      {...label}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                      value={checked}
                     Checked={<Grid item xs={12}>
                  <TextField  required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
                </Grid>}
                onChange={()=>handleChange("checked")}
                       />
                       }
                       label="ARE YOU A TEACHER?"
                    /> */}

                      <div>
                        <label>
                          <input
                            type="checkbox"
                            id="name"
                            style={{ height: "1.2vw", width: "1.2vw" }}
                            onChange={() => setChecked(!checked)}
                            checked={checked}
                          />
                          <label for id="name" style={{ padding: "0.5vw" }}>
                            ARE YOU A TEACHER?
                          </label>
                          {checked ? (
                            //  <input className="inputRequest formContentElement" name="token" type="text" placeholder="token"/>
                            <div>
                              <Grid item xs={8} style={{ padding: "0.5vw" }}>
                                <TextField
                                  // required
                                  fullWidth
                                  id="Skill"
                                  name="Skill"
                                  label="Skills"
                                  type="text"
                                />
                              </Grid>
                              <Grid item xs={8} style={{ padding: "0.5vw" }}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-required-label">
                                    Experience
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={experience}
                                    label="Experience*"
                                    onChange={handleChange}
                                    MenuProps={{
                                      PaperProps: { sx: { maxHeight: 300 } },
                                    }}
                                  >
                                    <MenuItem value={0}>
                                      Fresher(less than one year)
                                    </MenuItem>
                                    <MenuItem value={1}>1 year</MenuItem>
                                    <MenuItem value={2}>2 years</MenuItem>
                                    <MenuItem value={3}>3 years</MenuItem>
                                    <MenuItem value={4}>4 years</MenuItem>
                                    <MenuItem value={5}>5 years</MenuItem>
                                    <MenuItem value={30}>6 years</MenuItem>
                                    <MenuItem value={30}>7 years</MenuItem>
                                    <MenuItem value={30}>8 years</MenuItem>
                                    <MenuItem value={30}>9 years</MenuItem>
                                    <MenuItem value={30}>10 years</MenuItem>
                                    <MenuItem value={30}>11 years</MenuItem>
                                    <MenuItem value={30}>12 years</MenuItem>
                                    <MenuItem value={30}>13 years</MenuItem>
                                    <MenuItem value={30}>14 years</MenuItem>
                                    <MenuItem value={30}>15 years</MenuItem>
                                    <MenuItem value={30}>16 years</MenuItem>
                                    <MenuItem value={30}>17 years</MenuItem>
                                    <MenuItem value={30}>18 years</MenuItem>
                                    <MenuItem value={30}>19 years</MenuItem>
                                    <MenuItem value={30}>20 years</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                              <Grid item xs={8} style={{ padding: "0.5vw" }}>
                                <TextField
                                  // required
                                  fullWidth
                                  id="Language"
                                  name="Language"
                                  label="Prefered Language"
                                  type="text"
                                />
                              </Grid>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </label>
                      </div>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={save}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
