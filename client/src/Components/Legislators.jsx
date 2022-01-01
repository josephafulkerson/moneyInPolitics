import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ContributionsContainer from "./ContributionsContainer";
import { Link } from "react-router-dom";

const Legislators = ({ legislators, setActiveLegislator, activeLegislator, contributions }) => {
  const { name, party, website_url } = legislators;
  const [ showList, setShowList ] = useState(false)

  function handleContributions() {
    // setActiveLegislator(legislators.id)
    setShowList(!showList)
  }

  return (
    <div className="legs">
      <h2>{name}</h2>
      
        <Button
          onClick={handleContributions}
          size="small"
          variant="contained"
          color="success"
        >
          💰 <strong>Contributions</strong> 💰
        </Button>
        {showList  ? <ContributionsContainer 
                        legislator={legislators} contributions={contributions}/> : null}
      <h3>{party}</h3>
      <a href={website_url}>{website_url}</a>
      <br/>
      <br/>
    </div>
  );
};

export default Legislators;
