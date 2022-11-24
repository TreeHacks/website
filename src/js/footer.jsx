import React from "react";

import { EmailIcon } from "./new_images/email";
import { FacebookIcon } from "./new_images/facebook";
import { TwitterIcon } from "./new_images/twitter";
import { InstagramIcon } from "./new_images/instagram";
import { GithubIcon } from "./new_images/github";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid #E5E7EB",
        width: "80%",
        textAlign: "center",
        backgroundColor: "transparent",
        padding: "15px",
        paddingTop: "80px",
        color: "white",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <a className="footer-item" href="mailto:hello@treehacks.com">
          <EmailIcon />
        </a>
        <a href="https://twitter.com/hackwithtrees" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://github.com/treehacks" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://instagram.com/hackwithtrees" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://facebook.com/treehacks" target="_blank">
          <FacebookIcon />
        </a>
      </div>

      <h2 style={{ fontWeight: 400, marginTop: "15px" }} id="linkText">
        Code of Conduct | Privacy Policy | Travel Guidelines
      </h2>
      <h3 style={{ fontWeight: 400, margin: "15px" }}>
        Copyright © TreeHacks, 2023
      </h3>
    </div>
  );
}

export default Footer;
