import Contributions from "./Contributions";

const ContributionsContainer = ({ legislator, contributions, activeLegislator }) => {
  
  // console.log('legislator', legislator)
  // console.log('contributions', contributions)
  // const filtered = () =>
  //   contributions.filter((c) => c.legislator_id == legislator);

  return (
    <>
      <div>
        {/* {filtered().map((c) => ( */}
        {legislator.contributions.map(c => <Contributions legislator={c}/>) }
          
        {/* ))} */}
      </div>
    </>
  );
};

export default ContributionsContainer;
