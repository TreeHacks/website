import React from "react";
import man from "../svg/man.svg";
import Footer from "./footer";

const SPONSORS = {
  biggest: [
    {
      link: "https://en.valuenex.com/",
      img: require("../sponsor-logos/valuenex.png"),
    },
    { link: "https://vmware.com", img: require("../sponsor-logos/vm.png") },
  ],
  big: [
    {
      link: "https://goodcall.com/",
      img: require("../sponsor-logos/goodcall.png"),
    },
    { link: "https://intel.com/", img: require("../sponsor-logos/intel.png") },
    {
      link: "https://bubble.com/",
      img: require("../sponsor-logos/bubble.png"),
    },
    {
      link: "https://terra.money/",
      img: require("../sponsor-logos/terra.png"),
    },
  ],
  medium: [
    {
      link: "https://www.scale.ai/",
      img: require("../sponsor-logos/scale.png"),
    },
    {
      link: "https://watershedclimate.com/",
      img: require("../sponsor-logos/watershed.png"),
    },
    { link: "https://mage.ai/", img: require("../sponsor-logos/mage.png") },
    {
      link: "https://cadence.com/",
      img: require("../sponsor-logos/cadence.png"),
    },
    {
      link: "https://teradata.com/",
      img: require("../sponsor-logos/teradata.png"),
    },
    {
      link: "https://checkbook.io/",
      img: require("../sponsor-logos/checkbook.png"),
    },
    {
      link: "https://www.intersystems.com/",
      img: require("../sponsor-logos/intersystems.png"),
    },
  ],
  small: [
    {
      link: "https://www.citadel.com/",
      img: require("../sponsor-logos/citadel.png"),
    },
    {
      link: "https://www.deshaw.com/",
      img: require("../sponsor-logos/deshaw.png"),
    },
    {
      link: "https://www.meta.com/",
      img: require("../sponsor-logos/meta.png"),
    },
    {
      link: "https://pallet.com/",
      img: require("../sponsor-logos/pallet.png"),
    },
    { link: "https://tiktok.com/", img: require("../sponsor-logos/tt.png") },
    { link: "https://kodiak.ai/", img: require("../sponsor-logos/kodiak.png") },
    { link: "https://mtx.gg/", img: require("../sponsor-logos/matrix.png") },
    { link: "https://pear.vc", img: require("../sponsor-logos/pear.png") },
    { link: "https://neo.com", img: require("../sponsor-logos/neo.png") },
  ],
  smallest: [],
  tiny: [],
};
//
//
//
// {"link": "https://zoom.us//", "img": require('../sponsor-logos/zoom.png')},
// {"link": "https://ohyay.co/", "img": require('../sponsor-logos/ohyay.png')},
// {"link": "https://www.nvidia.com/", "img": require('../sponsor-logos/nvidia.png')},
// {"link": "https://cloud.google.com/", "img": require('../sponsor-logos/GoogleCloud.png')},
// {"link": "https://cloud.google.com/", "img": require('../sponsor-logos/mitsubishi.png')}
// {"link": "https://checkbook.io/", "img": require('../sponsor-logos/checkbook.png')},
// {"link": "https://atsign.com/", "img": require('../sponsor-logos/thecompany.png')},
// {"link": "https://human.capital", "img": require('../sponsor-logos/hc.png')},
// {"link": "https://neo.com/", "img": require('../sponsor-logos/neo.png')},
// {"link": "https://www.deshaw.com/", "img": require('../sponsor-logos/deshaw.png')},
// {"link": "https://www.stacks.co/", "img": require('../sponsor-logos/stacks.svg')}
// {"link": "https://www.esri.com/en-us/home", "img": require('../sponsor-logos/esri1.png')},
// {"link": "https://microsoft.com", "img": require('../sponsor-logos/microsoft.png')},
//

const _makeSponsors = function (key) {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "top",
        alignContent: key == "big" ? "center" : "flex-start",
        display: "flex",
        gap: "10px",
        paddingLeft: key == "medium" ? "57px" : key == "small" ? "25px" : "0px",
        paddingRight:
          key == "medium" ? "57px" : key == "small" ? "25px" : "0px",
        flexWrap: "wrap",
        marginBottom: "40px",
        width: "50%",
        flexDirection: "row",
      }}
      className={`level level-${key}`}
    >
      {SPONSORS[key].map((sponsor) => (
        <div>
          <a href={sponsor["link"]} target="_blank">
            <img key={sponsor["img"]} src={sponsor["img"]} alt="sponsor" />
          </a>
        </div>
      ))}
    </div>
  );
};

function Sponsors() {
  return (
    <div id="sponsors" className="container">
      {/* <div className="stripe-wrapper sponsors">
        <div className="stripe accent-gray" />
      </div>
      <div className="floating-illustration parachute">
        <img src={man} />
      </div> */}
      <h1
        className="section-heading"
        id="sub-heading"
        style={{ paddingTop: "80px" }}
      >
        sponsors
      </h1>
      <p className="body">
        come back to see the lineup of sponsors for TreeHacks 2023.
      </p>
      {/* 
    
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          flexDirection: "row",
        }}
      >
        {_makeSponsors("biggest")}
        {_makeSponsors("big")}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {_makeSponsors("medium")}
        {_makeSponsors("small")}
      </div> */}

      {/* {_makeSponsors("smallest")}
      {_makeSponsors("tiny")} */}

      {/* <a
        href="mailto:hello@treehacks.com?Subject=Sponsorship%20Interest"
        className="apply-button"
      >
        become a sponsor!
      </a> */}
      <Footer />
    </div>
  );
}

export default Sponsors;
