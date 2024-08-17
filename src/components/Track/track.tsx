import "./track.css";
import Track from "./track.svg?react";
import Education from "./education.svg?react";
import Healthcare from "./healthcare.svg?react";
import Sustainability from "./sustainability.svg?react";
import Fintech from "./fintech.svg?react";
import Entertainment from "./entertainment.svg?react";
import FireflySection from "../Firefly/firefly";
import FireflySmallSection from "../Firefly/fireflySmall";

const TrackSection: React.FC = () => {
  
  return (
    <div className="track-section">
      <div className="firefly-container">
        <FireflySection />
        <FireflySmallSection />
      </div>

      <Track className="background-svg" />
      <div className="track-title">TRACKS</div>
      <div className="track-icons-container">
        <div className="icon-caption-pair">
          <Education className="track-icon" />
          <div className="track-caption">education</div>
        </div>
        <div className="icon-caption-pair">
          <Healthcare className="track-icon" />
          <div className="track-caption">healthcare</div>
        </div>
        <div className="icon-caption-pair">
          <Sustainability className="track-icon" />
          <div className="track-caption">sustainability</div>
        </div>
        <div className="icon-caption-pair">
          <Fintech className="track-icon" />
          <div className="track-caption">fintech & security</div>
        </div>
        <div className="icon-caption-pair">
          <Entertainment className="track-icon" />
          <div className="track-caption">entertainment</div>
        </div>
      </div>
    </div>
  );
};

export default TrackSection;
