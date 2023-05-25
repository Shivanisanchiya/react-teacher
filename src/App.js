import "./app.css";
import Home from "./Components/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mission_Vission from "./Components/MissionVission/missionvission";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function App() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    const result = await axios.get("http://localhost:8085/teachers");
    setTeachers(result.data);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/H&D/Contact us" element={<Mission_Vission />} />
        </Routes>
      </BrowserRouter>
      {/* <tbody> */}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {teachers.map((teachers) => (
            <TableRow>
              <TableCell align="right">{teachers.firstName}</TableCell>
              <TableCell align="right">{teachers.lastName}</TableCell>
              <TableCell align="right">{teachers.email}</TableCell>
              <TableCell align="right">{teachers.phone}</TableCell>
              <TableCell align="right">{teachers.password}</TableCell>
              <TableCell align="right">{teachers.confirmedPassword}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* </tbody> */}
    </div>
  );
}

export default App;
