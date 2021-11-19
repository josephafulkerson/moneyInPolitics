import React, { useEffect, useState } from "react";
import LegislatorContainer from "./LegislatorContainer";
import Button from "@mui/material/Button";

const Home = ({ legislators }) => {
  const [searchTerm, setSearch] = useState("");
  const [searchParty, setParty] = useState("");

//   const filteredLegislators = legislators.filter((legislatorObj) =>
//     legislatorObj.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const filteredParty = legislators.filter((legislatorObj) =>
//     legislatorObj.party.includes(searchParty)
//   );

  const filteredItems = legislators.filter(
    (legislatorObj) =>
      legislatorObj.party.includes(searchParty) &&
      legislatorObj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <form>
        <label>Search For legislators</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      </form>
      <form>
        <label>Filter by Party</label>
        <select onChange={(e) => setParty(e.target.value)}>
          <option value="R">Republican</option>
          <option value="D">Democrat</option>
          <option value="I">Independent</option>
        </select>
      </form>
      <Button size="small" variant="contained" onClick={() => setShowList(!showList)}>
        See All Legislators
      </Button>
      {showList ? <LegislatorContainer legislators={filteredItems} /> : null}
    </div>
  );
};

export default Home;
