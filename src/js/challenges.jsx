import React from 'react';
import {challenges, challenges_intro} from './content.json';

function Challenges() {
  return(
    <div id="challenges">
      {/*<div className="stripe accent-orange"/>*/}
      <h1 className="section-heading">challenges</h1>
      <div className="section-intro">{challenges_intro}</div>
      <div className="container">
        {challenges.map((challenge, i) => {
          return <Challenge name={challenge.name} logo={challenge.logo} description={challenge.description} key={i} />
        })}
      </div>
    </div>
  );
}

function Challenge(props) {
  return(
    <div className="challenge">
      <img src={props.logo} alt={props.name + " logo"} />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Challenges;
