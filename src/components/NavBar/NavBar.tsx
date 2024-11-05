import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from './logo.svg?react';
import './NavBar.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href='/' className="navbar-logo">
          <Logo width='auto' height='auto' />
        </a>

        <ul className="navbar-menu">
          <li className="navbar-sections">
            <a href="https://2024.treehacks.com" target="_blank">2024</a>
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
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
