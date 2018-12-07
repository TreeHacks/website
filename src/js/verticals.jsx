import React from 'react';
import {verticals} from './content.json';

function Verticals() {
  return(
    <div id="verticals">
      <h1 className="section-heading">verticals</h1>
      <div className="container">
        <Vertical name={verticals[0].name} logo={verticals[0].logo} description={verticals[0].description} />
        <Vertical name={verticals[1].name} logo={verticals[1].logo} description={verticals[1].description} />
        <Vertical name={verticals[2].name} logo={verticals[2].logo} description={verticals[2].description} />
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
