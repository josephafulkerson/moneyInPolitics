import React from "react";
import Button from '@mui/material/Button';

const Legislators = ({legislators}) => {

    const { name, party, website_url } = legislators
  return (
    <>
      <h3>{name}</h3>
      <h5>{party}</h5>
      <p>{website_url}</p>
      <Button variant="contained">👀Add {name} to Watchlist</Button>
    </>
  );
};

export default Legislators;
