import React from 'react';
import * as logo from '../svg/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ended_cutoff, live_cutoff } from './content.json';

function Navbar() {
  return(
    <nav id="navbar">
      <ul className="container">
        <li id="navbar-logo">
          <a href="/">
            <img src={logo} alt="treehacks small logo"/>
            <span className="logo-text-tree">tree</span>
            <span className="logo-text-hacks">hacks</span>
          </a>
        </li>
        <div id="mobile-menu">
          <li className="navbar-item"><AnchorLink offset='100' href="#home">home</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#verticals">verticals</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#about">about</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#faq">faq</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#sponsors">sponsors</AnchorLink></li>
          <li className="navbar-item"><a href="https://root.treehacks.com">dashboard</a></li>
          {Date.now() > new Date(ended_cutoff) ?
            null
          : Date.now() > new Date(live_cutoff) ?
            <a href="https://live.treehacks.com"><li id="navbar-apply">view live schedule</li></a>
          :
            <a href="https://root.treehacks.com"><li id="navbar-apply">apply now!</li></a>
          }
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
