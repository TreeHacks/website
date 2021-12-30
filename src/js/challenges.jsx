/**
 * Component containing information about the TreeHacks challenges
 * along with their respective names, logos, and descriptions
 * @module Challenges
 */

// Import react packages
import React from 'react';

// Import content
import {challenges, challenges_intro} from './content.json';

/**
 * Returns HTML `div` tag with information about a single challenge
 * @param {Object} props Contains the challenge name, logo, and description
 * @returns {HTMLDivElement} HTML `div` tag containing the challenge components
 */
function Challenge(props) {
  return(
    <div className="challenge">
      <img src={props.logo} alt={props.name + " logo"} />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

/**
 * Challenges component containing:
 * - Introduction to TreeHacks challenges
 * - Mapping of each challenge to their names, logos, and descriptions
 * @returns {HTMLDivElement} HTML `div` tag containing the challenges components
 * @see {@link Challenge}
 */
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

// Export the Challenges component
export default Challenges;
