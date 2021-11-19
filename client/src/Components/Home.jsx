import React, { useEffect, useState } from "react";
import LegislatorContainer from "./LegislatorContainer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = ({ legislators }) => {
  const [searchTerm, setSearch] = useState("");
  const [searchParty, setParty] = useState("");

  const filteredItems = legislators.filter(
    (legislatorObj) =>
      legislatorObj.party.includes(searchParty) &&
      legislatorObj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <form>
        <TextField
          label="Search For legislators"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>
      </form>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By Party</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter By Party"
          onChange={(e) => setParty(e.target.value)}
        >
          <MenuItem value="R">Republican</MenuItem>
          <MenuItem value="D">Democrat</MenuItem>
          <MenuItem value="I">Independent</MenuItem>
        </Select>
      </FormControl>
      {/* <form>
        <label>Filter by Party</label>
        <select onChange={(e) => setParty(e.target.value)}>
          <option value="R">Republican</option>
          <option value="D">Democrat</option>
          <option value="I">Independent</option>
        </select>
      </form> */}
      <Button
        size="small"
        variant="contained"
        onClick={() => setShowList(!showList)}
      >
        See All Legislators
      </Button>
      {showList ? <LegislatorContainer legislators={filteredItems} /> : null}
    </div>
  );
};

export default Home;

{
  /* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Filter By Party</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Filter By Party"
    onChange={(e) => setParty(e.target.value)}
  >
    <MenuItem value={R}>Republican</MenuItem>
    <MenuItem value={D}>Democrat</MenuItem>
    <MenuItem value={I}>Independent</MenuItem>
  </Select>
</FormControl> */
}
