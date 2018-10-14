import React from 'react';

import emailIcon from '../png/emailIcon.png';
import facebookIcon from '../png/facebookIcon.png';
import twitterIcon from '../png/twitterIcon.png';
import instagramIcon from '../png/instagramIcon.png';
import githubIcon from '../png/githubIcon.png';

function Footer() {
  return(
    <footer id="footer">
        <a href="mailto:hello@treehacks.com">
          <img className="footer-item" src={emailIcon} alt="email"/>
        </a>
        <a href="https://facebook.com/treehacks" target="_blank" rel="noopener noreferrer">
          <img className="footer-item" src={facebookIcon} alt="facebook"/>
        </a>
        <a href="https://twitter.com/hackwithtrees" target="_blank" rel="noopener noreferrer">
          <img className="footer-item" src={twitterIcon} alt="twitter"/>
        </a>
        <a href="https://instagram.com/hackwithtrees" target="_blank" rel="noopener noreferrer">
          <img className="footer-item" src={instagramIcon} alt="instagram"/>
        </a>
        <a href="https://github.com/treehacks" target="_blank" rel="noopener noreferrer">
          <img className="footer-item" src={githubIcon} alt="github"/>
        </a>
    </footer>
  );
}

export default Footer;
