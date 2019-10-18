import React from 'react';
import {verticals} from './content.json';

function Verticals() {
  return(
    <div id="verticals">
      <div className="stripe accent-orange"/>
      <h1 className="section-heading">challenges</h1>
      <div className="container">
        {verticals.map((vertical, i) => {
          return <Vertical name={vertical.name} logo={vertical.logo} description={vertical.description} key={i} />
        })}
      </div>
    </div>
  );
}

function Vertical(props) {
  return(
    <div className="vertical">
      <img src={props.logo} alt={props.name + " logo"} />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Verticals;
