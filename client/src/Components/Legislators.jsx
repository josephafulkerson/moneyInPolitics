import React, {useState} from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Legislators = ({legislators}) => {

  const [ isWatching, setIsWatching ] = useState(false)
    const { name, party, website_url } = legislators
  return (
    <>
    <Grid container rowSpacing = {1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <h3>{name}</h3>
      <h5>{party}</h5>
      <p>{website_url}</p>
      <Button size="small" variant="contained" onClick={() => setIsWatching(!isWatching)}>{isWatching ? `👀 Watching ${name}...` : `Add ${name} to Watchlist`}</Button>
      </Grid>
    </>
  );
};

export default Legislators;
