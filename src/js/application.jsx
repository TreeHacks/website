/**
 * Component containing information about the TreeHacks
 * application along with the application button
 * 
 * **Component currently not in use**
 * @module Application
 */

// Import react packages
import React from 'react';

// Import content
import {application_intro, application_body} from './content.json';

/**
 * Application component containing:
 * - Information about the TreeHacks application
 * - Application button
 * @returns {HTMLDivElement} HTML `div` tag containing the application components
 */
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

// Export the Application component
export default Application;
