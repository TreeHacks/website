import "./about.css";
import About from "./about.svg?react";
import FireflySection from "../Firefly/firefly";

const AboutSection: React.FC = () => {
  return (
    <div className="about-section">
      <div className="firefly-container">
        <FireflySection variant="firefly" />
        <FireflySection variant="fireflySmall" />
        <div className="section-content">
          <div className="section-title">ABOUT</div>
          <div className="section-text">
            TreeHacks is Stanford’s premier hackathon. The country’s brightest
            engineering students are flown to Stanford’s campus to build solutions
            to the world’s largest challenges for 36 hours straight. Join us for our
            11th year to dream and build the future!
          </div>
          <div className="section-stats">
            <div className="stat-caption-pair">
              <div className="about-numbers">1000</div>
              <div className="about-captions">Hackers</div>
            </div>
            <div className="stat-caption-pair">
              <div className="about-numbers">30</div>
              <div className="about-captions">Universities</div>
            </div>
            <div className="stat-caption-pair">
              <div className="about-numbers">12</div>
              <div className="about-captions">Countries</div>
            </div>
            <div className="stat-caption-pair">
              <div className="about-numbers">40</div>
              <div className="about-captions">Companies</div>
            </div>
            <div className="stat-caption-pair">
              <div className="about-numbers">350</div>
              <div className="about-captions">Projects</div>
            </div>
            <div className="stat-caption-pair">
              <div className="about-numbers">$160k</div>
              <div className="about-captions">Prizes</div>
            </div>
            <div className="stat-caption-pair">
              <div className="about-numbers">36</div>
              <div className="about-captions">Hours</div>
            </div>
          </div>
        </div>
      </div>
      <About className="background-svg" />
    </div>
  );
};

export default AboutSection;
