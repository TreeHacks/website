import React from 'react';
import {application_intro, application_body} from './content.json';

function Application() {
  return(
    <div id="application">
      <div className="stripe accent-orange"/>
      <h1 className="section-heading">the application</h1>
      <div className="container">
        <p className="content-text">{application_intro}</p>
        <p className="content-text">{application_body}</p>
        <p className="content-text apply">
          <a href="https://root.treehacks.com" className="apply-button">apply now</a>
        </p>
      </div>
    </div>
  );
}

export default Application;
