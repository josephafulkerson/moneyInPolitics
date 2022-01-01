import React from "react";

const Contributions = ({ legislator }) => {
  const { organization, amount } = legislator;
  return (
    <>
      
        <h4>
          {organization} : <em>${amount}</em>{" "}
        </h4>
     
    </>
  );
};

export default Contributions;
