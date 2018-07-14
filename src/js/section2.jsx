import React from 'react';
import ReactPlayer from 'react-player';

function Section2() {
  return (
    <div id="section2">
      <Left />
      <Right />
    </div>
  );
}

function Left() {
  return (
    <div className="left">
      <h2>Transform crazy ideas into real products.</h2>
      <p>Join hundreds of hackers from around the globe in an annual hackathon held at Stanford University. At TreeHacks, you can imagine and build incredible projects alongside your fellow creators. Whether you're building software or hardware, have years of experience or are just starting out, we've got you covered.</p>
    </div>
  );
}

function Right() {
  return (
    <div className="right">
      <ReactPlayer url="https://vimeo.com/256333276" />
    </div>
  );
}

export default Section2;
