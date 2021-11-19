import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Legislators = ({ legislators }) => {
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
              <Button size='small' variant="contained" color="success">💰 Contributions</Button>
              <h5>{party}</h5>
              <p>{website_url}</p>
              <Button
                size="small"
                variant="contained"
                onClick={() => setIsWatching(!isWatching)}
              >
                {isWatching
                  ? `👀 Watching ${name}...`
                  : `Add ${name} to Watchlist`}
              </Button>
    </div>
  );
};

export default Legislators;
