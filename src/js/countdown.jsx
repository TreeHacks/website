import React from 'react';

class Countdown extends React.Component {
  render() {
    return(
      <div id="countdown">
        <h1 className="section-heading">February 15-17 at Stanford</h1>
        <div className="container">
          <Deadlines />
        </div>
      </div>
    );
  }
}
export default Countdown;

class Deadlines extends React.Component {
  render() {
    return(
      <div id="deadlines">
        <h3>Some deadlines</h3>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
