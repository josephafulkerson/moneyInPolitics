import React, { useEffect, useState } from "react";
import Legislators from "./Legislators";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const LegislatorContainer = ({ legislators, setActiveLegislator }) => {
  return (
    <div>
      <Grid container spacing={1} justify="center">
        {legislators.map((l) => (
          <Grid item>
            <Paper>
              <Legislators
                setActiveLegislator={setActiveLegislator}
                legislators={l}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LegislatorContainer;
