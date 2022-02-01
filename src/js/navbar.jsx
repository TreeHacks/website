/**
 * Component containing the navigation bar
 * @module Navbar
 */

// Import react packages
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Import content
import logo from '../svg/white.svg';
import { ended_cutoff, live_cutoff } from './content.json';

/**
 * @constant {Object} STATUSES
 * TreeHacks registration status options
 */
const STATUSES = {
  beforeRegistration: 1,
  registration: 2,
};

/**
 * @constant {Number} STATUS
 * Current TreeHacks registration status
 */
const STATUS = STATUSES.registration;

/**
 * Navbar component containing the following TreeHacks webpage links:
 * - {@link module:Home}
 * - {@link module:About}
 * - {@link module:Challenges}
 * - {@link module:Projects}
 * - {@link module:FAQ}
 * - {@link module:Sponsors}
 * - Apply button
 * @returns {HTMLNavElement} HTML `nav` tag containing TreeHacks webpage links
 */
function Navbar() {
  return (
    <nav id="navbar">
      <div className="container">
        <ul className="menu">
          <li id="navbar-logo">
            <a href="/">
              <img src={logo} alt="treehacks small logo" style={{ height: 30}}/>
              <div id="title">
                <span className="logo-text-tree">tree</span>
                <span className="logo-text-hacks">hacks</span>
              </div>
            </a>
          </li>
          <li className="navbar-item"><AnchorLink offset='100' href="#home">home</AnchorLink></li>
          <li className="navbar-item about-link"><AnchorLink offset='100' href="#about">about</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#challenges">challenges</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#projects">projects</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#faq">faq</AnchorLink></li>&nbsp;
          <li className="navbar-item"><AnchorLink offset='100' href="#sponsors">sponsors</AnchorLink></li>&nbsp;
          {/* <li className="special-link navbar-item"><a href="https://treehacks.typeform.com/to/rK08ej">join team</a></li> */}
          {/* { STATUS == STATUSES.registration && 
          } */}
          {Date.now() > new Date(ended_cutoff) ?
            null
            : Date.now() > new Date(live_cutoff) ?
              <a href="https://live.treehacks.com"><li id="navbar-apply">view live schedule</li></a>
              :
              <li className=" apply-link navbar-item" title="Applications open now"><a href="https://root.treehacks.com">apply now</a></li>
          } 
        </ul>
      </div>
    </nav>
  );
}

// Export the Navbar component
export default Navbar;
