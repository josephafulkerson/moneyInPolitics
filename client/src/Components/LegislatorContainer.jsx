import React, { useEffect, useState } from "react";
import Legislators from "./Legislators";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const LegislatorContainer = ({ legislators, setActiveLegislator, activeLegislator, contributions }) => {
  return (
    <div>
      <Grid container spacing={2} justify="center">
        {legislators.map((l) => (
          <Grid item md={4} >
            <Paper id="test">
              <Legislators
                setActiveLegislator={setActiveLegislator}
                legislators={l}
                activeLegislator={activeLegislator}
                contributions={contributions}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LegislatorContainer;
