import React, { useEffect, useState } from "react";
import Contributions from "./Contributions";


const ContributionsContainer = ({ contributions, activeLegislator }) => {
  const filtered = () =>
    contributions.filter(
      (contribution) => contribution.legislator.id == activeLegislator
    );

  return (
    <div>
      {filtered().map((c) => (
        <Contributions contributions={c} />
      ))}
    </div>
  );
};

export default ContributionsContainer;
