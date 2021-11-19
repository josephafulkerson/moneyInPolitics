import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Legislators = ({ legislators, setActiveLegislator }) => {
  const [isWatching, setIsWatching] = useState(false);
  const { name, party, website_url } = legislators;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="legs">
      <h3>{name}</h3>
      <Link to="/contributions">
        <Button
          onClick={() => setActiveLegislator(legislators.id)}
          size="small"
          variant="contained"
          color="success"
        >
          💰 Contributions
        </Button>
      </Link>
      <h5>{party}</h5>
      <a href={website_url}>{website_url}</a>
      <br />
      <br />
      <Button
        size="small"
        variant="contained"
        onClick={() => setIsWatching(!isWatching)}
      >
        {isWatching ? `👀 Watching ${name}...` : `Add ${name} to Watchlist`}
      </Button>
    </div>
  );
};

export default Legislators;
