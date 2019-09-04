import React from 'react';

class Countdown extends React.Component {
  render() {
    return(
      <div id="faq">
        <h1 className="section-heading">February 15-17 at Stanford</h1>
        <Deadlines />
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
      </div>
    )
  }
}
