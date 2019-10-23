import React from "react";
import ReactPlayer from "react-player";
import { about_intro } from "./content.json";
import { about_body } from "./content.json";
import clouds from "../svg/clouds.svg"
import relax from "../svg/relax.svg"
import computer_arms from "../svg/computer-arms.svg"
import Countdown from "./countdown.jsx";

function About() {
  let videoURL = "https://player.vimeo.com/video/368159554";
  return (
    <div id="about">
      <div className="floating-illustration clouds"><img src={clouds} /></div>
      <div className="container">
        <div>
          <p className="intro">{about_intro}</p>
        </div>
        <Countdown />
        <div>
          <p className="intro section-intro">What the hack is a hackathon?</p>
          <p className="content-text">A hackathon is a 12- to 36-hour event that brings students together from a variety of backgrounds to build. Hacking emphasizes playing with tools and frameworks you’ve never seen before, dreaming up incredible (and oftentimes, insane) ideas, and rapidly building and breaking to make your project a reality. Projects can be anything from a mobile app to a robotic drink mixer. What matters most is that hackers like you get the chance to learn something new, build something you’re proud of, and meet an incredible community of hackers and resources. </p>
        </div>
        <div>
          <p className="intro section-intro">What is TreeHacks?</p>
          <p className="content-text">
            <img src={computer_arms} className="side-image pull-right" />
            TreeHacks is Stanford University’s premier and largest hackathon. We bring together over 1000 students from all around the world to Stanford’s beautiful Huang Engineering Center every February to build the future. Sure, you’ll be hacking for 36 hours straight. But there will be yoga breaks. And laser tag. Lightsaber battles? Maybe even puppies. Whether you’re a seasoned veteran or just getting started, we’ve got your back every step of the way. Don’t forget your sunscreen!
          </p>
          <p className="content-text">We aim to make TreeHacks the best environment possible to help you grow and learn as a hacker and individual, while also building out technology that shapes our future. To that end, we are spending hundreds of hours planning an incredible event to make sure you have an amazing experience at Stanford. Need some hands-on help with a specific tech library or API? We gotchu. Fancy doing an escape room while your code runs? Meet us on the first floor. Craving an acaí bowl picker-upper after an all-nighter of hacking? Delivery at 7 AM! You take care of the hacking, we'll take care of you.</p>
          <p className="content-text">At Stanford, we’re super lucky to have access to one of the greatest engineering institutions on the planet, situated at the epicenter of innovation: the Silicon Valley. We’re bringing resources from industry and academia, mentors from established tech giants and budding startups, and experts from non-profits and global research groups to help you with every step of your hacking process. We’ll have workshops, tech talks, mentorship, tons of food, and plenty of swag and fun events to keep your engines pumped throughout the weekend.
          </p>
        </div>

        <div className="about-video">
          <ReactPlayer url={videoURL} height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default About;
