import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ExpDrop() {
  const [experience, setexperience] = React.useState("");

  const handleChange = (event) => {
    setexperience(event.target.value);
  };

  return (
    <div className="exdrop">
      <FormControl required sx={{ minWidth: 300 }}>
        <InputLabel id="demo-simple-select-required-label">
          Experience
        </InputLabel>
        <Select
          style={{ backgroundColor: "white" }}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={experience}
          label="Experience*"
          onChange={handleChange}
          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
        >
          {/* <MenuItem value="">
            <em>Fresher(less than one year)</em>
          </MenuItem> */}
          <MenuItem value={0}>Fresher(less than one year)</MenuItem>
          <MenuItem value={1}>1 year</MenuItem>
          <MenuItem value={2}>2 years</MenuItem>
          <MenuItem value={3}>3 years</MenuItem>
          <MenuItem value={4}>4 years</MenuItem>
          <MenuItem value={5}>5 years</MenuItem>
          <MenuItem value={6}>6 years</MenuItem>
          <MenuItem value={7}>7 years</MenuItem>
          <MenuItem value={8}>8 years</MenuItem>
          <MenuItem value={9}>9 years</MenuItem>
          <MenuItem value={10}>10 years</MenuItem>
          <MenuItem value={11}>11 years</MenuItem>
          <MenuItem value={12}>12 years</MenuItem>
          <MenuItem value={13}>13 years</MenuItem>
          <MenuItem value={14}>14 years</MenuItem>
          <MenuItem value={15}>15 years</MenuItem>
          <MenuItem value={16}>16 years</MenuItem>
          <MenuItem value={17}>17 years</MenuItem>
          <MenuItem value={18}>18 years</MenuItem>
          <MenuItem value={19}>19 years</MenuItem>
          <MenuItem value={20}>20 years</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
