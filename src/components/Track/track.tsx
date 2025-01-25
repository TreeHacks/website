import "./track.css";
import Education from "./education.svg?react";
import Healthcare from "./healthcare.svg?react";
import Sustainability from "./sustainability.svg?react";
import Web3 from "./web3.svg?react";
import AutonomousSystems from "./auto-systems.svg?react";
import EdgeAI from "./edge-ai.svg?react";
import FireflySection from "../Firefly/firefly";
import Jar from "./jar.svg?react";

const TrackSection: React.FC = () => {
  
  return (
    <div className="track-section">
      <div className="firefly-container">
        <FireflySection variant="firefly" />
        <FireflySection variant="fireflySmall" />
      </div>

      <div className="track-title">TRACKS</div>
      <div className="track-icons-container">
        <div className="icon-caption-pair">
          <Jar className="track-icon" />
          <Education className="icon" />
          <div className="track-caption">education</div>
        </div>
        <div className="icon-caption-pair">
          <Jar className="track-icon" />
          <Healthcare className="icon" />
          <div className="track-caption">healthcare</div>
        </div>
        <div className="icon-caption-pair">
          <Jar className="track-icon" />
          <Sustainability className="icon" />
          <div className="track-caption">sustainability</div>
        </div>
        <div className="icon-caption-pair">
          <Jar className="track-icon" />
          <Web3 className="icon" />
          <div className="track-caption">web3</div>
        </div>
        <div className="icon-caption-pair">
          <Jar className="track-icon" />
          <AutonomousSystems className="icon" />
          <div className="track-caption">autonomy</div>
        </div>
        <div className="icon-caption-pair">
          <Jar className="track-icon" />
          <EdgeAI className="icon" />
          <div className="track-caption">edge AI</div>
        </div>
      </div>
    </div>
  );
};

export default TrackSection;
