import React from 'react';
import logo from '../svg/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ended_cutoff, live_cutoff } from './content.json';

const STATUSES = {
  beforeRegistration: 1,
  registration: 2,
};

const STATUS = STATUSES.registration;

function Navbar() {
  return (
    <nav id="navbar">
      <div className="container">
        <ul className="menu">
          <li id="navbar-logo">
            <a href="/">
              <img src={logo} alt="treehacks small logo" />
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
          { STATUS == STATUSES.registration && 
          <li className="special-link apply-link navbar-item"><a href="https://root.treehacks.com">apply now</a></li>
          }
          {Date.now() > new Date(ended_cutoff) ?
            null
            : Date.now() > new Date(live_cutoff) ?
              <a href="https://live.treehacks.com"><li id="navbar-apply">view live schedule</li></a>
              :
              <a href="https://root.treehacks.com"><li id="navbar-apply">apply now!</li></a>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
