import React from "react";
import ReactPlayer from "react-player";
// import clouds from "../svg/clouds.svg";

function Why() {
  let videoURL = "https://player.vimeo.com/video/391854507";
  return (
    <div id="why">
      <div className="container">
        {/* <video width="100%" height="auto" controls>
          <source src={videoURL} type="video/mp4" />
        </video> */}

        <div id="videocontainer">
          <ReactPlayer
            url="../videos/highlightvideo.mp4"
            height="100%"
            width="100%"
            loop="true"
            playing="true"
            muted="true"
          />

          <div id="overlaycontainer">
            <h1>We are back in person!</h1>
            <h1>
              Come enjoy the spirit of hacking on Stanford's beautiful campus.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
