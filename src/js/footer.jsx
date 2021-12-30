/**
 * Component containing the footer with TreeHacks contact information
 * @module Footer
 */

// Import react packages
import React from "react";

// Import content
// import emailIcon from "../png/emailIcon.png";
// import facebookIcon from "../png/facebookIcon.png";
// import twitterIcon from "../png/twitterIcon.png";
// import instagramIcon from "../png/instagramIcon.png";
// import githubIcon from "../png/githubIcon.png";

/**
 * Footer component containing the following TreeHacks contact links:
 * - Email
 * - Facebook
 * - Twitter
 * - Instagram
 * - GitHub
 * @returns {HtmlFooterElement} HTML `footer` tag containing TreeHacks contact links
 */
function Footer() {
  return (
    <footer id="footer">
{/*       
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
      
       <div id="footerImg"></div> */}
    </footer> 
  );
}

// Export the Footer component
export default Footer;
