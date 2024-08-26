import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-sections">
          <ScrollLink to="section1" smooth={true} duration={500}>Home</ScrollLink>
        </li>
        <li className="navbar-sections">
          <ScrollLink to="section2" smooth={true} duration={500}>About</ScrollLink>
        </li>
        <li className="navbar-sections">
          <ScrollLink to="section3" smooth={true} duration={500}>Tracks</ScrollLink>
        </li>
        <li className="navbar-sections">
          <ScrollLink to="section4" smooth={true} duration={500}>Speakers</ScrollLink>
        </li>
        <li className="navbar-sections">
          <ScrollLink to="section5" smooth={true} duration={500}>Sponsors</ScrollLink>
        </li>
        <li className="navbar-sections">
          <ScrollLink to="section6" smooth={true} duration={500}>FAQs</ScrollLink>
        </li>
        <li className="apply-button" data-tooltip="Applications will open soon!">
          <a href="https://root.treehacks.com" target="_blank" rel="noopener noreferrer">Apply</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
