import React, { useEffect, useState } from "react";
import LegislatorContainer from "./LegislatorContainer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = ({ legislators, setActiveLegislator }) => {
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
      <Grid container spacing={4} justify="center">
        <Grid item lg={4}>
          <TextField
            label="Search For legislators"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item lg={4}>
          <FormControl sx={{ width: 500 }}>
            <InputLabel id="demo-simple-select-label">
              Filter By Party
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Filter By Party"
              onChange={(e) => setParty(e.target.value)}
            >
              <MenuItem value="R">Republican</MenuItem>
              <MenuItem value="D">Democrat</MenuItem>
              <MenuItem value="independent">Independent</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button
            size="large"
            variant="contained"
            onClick={() => setShowList(!showList)}
          >
            See All Legislators
          </Button>
        </Grid>
        {showList ? (
          <LegislatorContainer
            setActiveLegislator={setActiveLegislator}
            legislators={filteredItems}
          />
        ) : null}
      </Grid>
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
