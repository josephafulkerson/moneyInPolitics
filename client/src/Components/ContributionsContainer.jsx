import Contributions from "./Contributions";

const ContributionsContainer = ({ legislator, contributions, activeLegislator }) => {
  


  return (
    <>
      <div>
      
        {legislator.contributions.map(c => <Contributions legislator={c}/>) }
          
  
      </div>
    </>
  );
};

export default ContributionsContainer;
