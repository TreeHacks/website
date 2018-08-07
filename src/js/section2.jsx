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
      <h2>Join us at TreeHacks 2019!</h2>
      <p>Yeah, we’ll be hacking for 36 hours straight, but we’ll take a yoga break or hike the Dish. Whether you’re a seasoned veteran or just getting started, we’ve got your back every step of the way. Don’t forget your sunscreen!</p>
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
