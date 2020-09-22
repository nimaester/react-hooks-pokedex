import React from 'react';

const YourTeam = ({team}) => {
  let l = "https://7528sprite.s3-us-west-1.amazonaws.com/sprite37.png";
  return (

    <div className="your-team">
      <div className="pokemon-team">
        {team.map((id, index) => (
          <img key={index} className="team-pokemon" src ={`https://7528sprite.s3-us-west-1.amazonaws.com/sprite${id}.png`} alt="" />
        ))}
      </div>
    </div>

  );
};

export default YourTeam;