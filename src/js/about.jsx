import React from 'react';
import ReactPlayer from 'react-player';
import {about_intro} from './content.json';
import {about_body} from './content.json';


function About() {
  let videoURL = "https://www.youtube.com/embed/mSlJTPzSH6g";
  return(
    <div id="about">
      <h1 className="section-heading">About</h1>
      <div className="container">
        <div><p id="intro">{about_intro}</p><p id="body">{about_body}</p></div>
        <div><ReactPlayer url={videoURL} width="100%" height="100%" /></div>
      </div>
    </div>
  );
}

export default About;
