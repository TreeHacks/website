import React from 'react';

import emailIcon from '../png/emailIcon.png';
import facebookIcon from '../png/facebookIcon.png';
import twitterIcon from '../png/twitterIcon.png';
import instagramIcon from '../png/instagramIcon.png';
import githubIcon from '../png/githubIcon.png';

function Footer() {
  return(
    <footer id="footer">
        <a className="footer-item" href="mailto:hello@treehacks.com">
          <img src={emailIcon} alt="email"/>
        </a>
        <a className="footer-item" href="https://facebook.com/treehacks" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="facebook"/>
        </a>
        <a className="footer-item" href="https://twitter.com/hackwithtrees" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="twitter"/>
        </a>
        <a className="footer-item" href="https://instagram.com/hackwithtrees" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="instagram"/>
        </a>
        <a className="footer-item" href="https://github.com/treehacks" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="github"/>
        </a>
        <a id="mlh-trust-badge"
          href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" alt="Major League Hacking 2019 Hackathon Season" />
        </a>
    </footer>
  );
}

export default Footer;
