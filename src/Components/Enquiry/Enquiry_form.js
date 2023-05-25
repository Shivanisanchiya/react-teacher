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
import "./Enquiry.css";
import { Grid, TextField, Card, CardContent } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Enquiry_form() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [experience, setexperience] = React.useState("");

  const handleChange = (event) => {
    setexperience(event.target.value);
  };

  return (
    <div className="enquiry_form">
      <div className="enquiry_details">
        <Button
          variant="contained"
          color="inherit"
          size="large"
          style={{ height: "4vw", width: "30vw", fontSize: "1.2vw" }}
          onClick={handleClickOpen}
        >
          Didn't find any teacher?
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
              ENQUIRE FOR TEACHER NOW
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="enquiryform">
          <Grid
            style={{
              backgroundImage: "url(/enquireimage.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "100vw",
              height: "50vw",
            }}
          >
            <Card style={{ maxWidth: 450, padding: "3vw", margin: "0 auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Enquire Now
                </Typography>

                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Enter first name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder="Enter last name"
                        label="Last Name"
                        variant="outlined"
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
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        placeholder="Enter phone number"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        placeholder="Skill"
                        label="Skill"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl required fullWidth>
                        <InputLabel id="demo-simple-select-required-label">
                          Experience
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-required-label"
                          id="demo-simple-select-required"
                          value={experience}
                          label="Experience*"
                          onChange={handleChange}
                          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
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

                    <Grid item xs={12}>
                      <Autocomplete
                        fullWidth
                        disablePortal
                        id="combo-box-demo"
                        options={Location}
                        // sx={{ width:  }}
                        renderInput={(params) => (
                          <TextField {...params} label="Location" />
                        )}
                      />
                    </Grid>

                    {/* <Grid item xs={12}>
                  
                  <FormControl fullWidth>
                 <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Online" control={<Radio />} label="Online" />
        <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
        </RadioGroup>
        </FormControl>
                 </Grid> */}

                    <FormControlLabel
                      control={
                        <Grid item xs={12}>
                          <Checkbox
                            {...label}
                            defaultChecked
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                          />
                        </Grid>
                      }
                      label="Online"
                    />

                    <FormControlLabel
                      control={
                        <Grid item xs={12}>
                          <Checkbox
                            {...label}
                            defaultChecked
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                          />
                        </Grid>
                      }
                      label="Offline"
                    />

                    <FormControlLabel
                      control={
                        <Grid item xs={12}>
                          <Checkbox
                            {...label}
                            defaultChecked
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                          />
                        </Grid>
                      }
                      label="Both"
                    />

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
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

const Location = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
