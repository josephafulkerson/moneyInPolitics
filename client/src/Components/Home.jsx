import React, { useState } from "react";
import LegislatorContainer from "./LegislatorContainer";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = ({ legislators, setActiveLegislator, contributions, activeLegislator }) => {

  const [searchTerm, setSearch] = useState("");
  const [searchParty, setParty] = useState("");


  const filteredItems = legislators.filter(
    (legislatorObj) =>
      legislatorObj.party.includes(searchParty) &&
      legislatorObj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <>
      <div className="homeMenu">
        <TextField
          label="Search For legislators"
          type="text"
          variant="standard"
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>

        <FormControl sx={{ width: 500, mx: 10 }}>
          <InputLabel id="demo-simple-select-label">Filter By Party</InputLabel>
          <Select
            variant="standard"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter By Party"
            onChange={(e) => setParty(e.target.value)}
          >
            <MenuItem value="R">Republican</MenuItem>
            <br />
            <br />
            <MenuItem value="D">Democrat</MenuItem>
          </Select>
        </FormControl>
      </div>

     
        <LegislatorContainer
          contributions={contributions}
          setActiveLegislator={setActiveLegislator}
          legislators={filteredItems}
          activeLegislator={activeLegislator}
        />
    </>
  );
};

export default Home;
