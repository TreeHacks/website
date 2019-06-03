import React from 'react';
import circuit from '../svg/circuit.svg';

class Circuit extends React.Component {
  render() {
    return(
      <div id="circuit">
        <img src={circuit} alt="circuits background"/>
      </div>
    );
  }
}

export default Circuit;
