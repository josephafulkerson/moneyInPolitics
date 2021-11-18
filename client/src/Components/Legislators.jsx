import React from "react";

const Legislators = ({legislators}) => {

    const { name, party, website_url } = legislators
  return (
    <>
      <h3>{name}</h3>
      <h5>{party}</h5>
      <p>{website_url}</p>
    </>
  );
};

export default Legislators;
