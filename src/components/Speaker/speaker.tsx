import "./speaker.css";
import Speaker from "./speaker.svg?react";

const SpeakerSection: React.FC = () => {
  return (
    <div className="speaker-section">
      <div className="speaker-section-content">
        <div className="speaker-title">SPEAKERS</div>
        <div className="speaker-text">Coming Soon...</div>
      </div>
      <Speaker className="background-svg" />
    </div>
  );
};

export default SpeakerSection;
