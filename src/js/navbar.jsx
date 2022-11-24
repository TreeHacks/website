import React from "react";
import logo from "../svg/white.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ended_cutoff, live_cutoff } from "./content.json";
import smalllogo from "./new_images/white-logo.png";

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
              <img
                src={smalllogo}
                style={{ width: "fit-content" }}
                alt="treehacks small logo"
              />
              <div id="title">
                <span className="logo-text-tree">tree</span>
                <span className="logo-text-hacks">hacks</span>
              </div>
            </a>
          </li>
          <li className="navbar-item">
            <AnchorLink offset="100" href="#home">
              Home
            </AnchorLink>
          </li>
          <li className="navbar-item about-link">
            <AnchorLink offset="100" href="#about">
              About
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink offset="100" href="#challenges">
              Projects
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink offset="100" href="#projects">
              Sponsors
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink offset="100" href="#faq">
              Challenges
            </AnchorLink>
          </li>
          &nbsp;
          <li className="navbar-item">
            <AnchorLink offset="100" href="#sponsors">
              FAQ
            </AnchorLink>
          </li>
          &nbsp;
          {/* <li className="special-link navbar-item"><a href="https://treehacks.typeform.com/to/rK08ej">join team</a></li> */}
          {/* { STATUS == STATUSES.registration && 
          
          } */}
          {Date.now() > new Date(ended_cutoff) ? null : Date.now() >
            new Date(live_cutoff) ? (
            <a href="https://live.treehacks.com">
              <li className=" apply-link navbar-item">view live schedule</li>
            </a>
          ) : (
            <li
              className=" apply-link navbar-item"
              title="Applications open now"
            >
              <a href="https://root.treehacks.com">apply now</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
