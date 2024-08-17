import "./speaker.css";
import Speaker from "./speaker.svg?react";

const SpeakerSection: React.FC = () => {
  return (
    <div className="speaker-section">
      <Speaker className="background-svg" />
      <div className="speaker-title">SPEAKERS</div>
      <div className="speaker-text">Coming Soon...</div>
    </div>
  );
};

export default SpeakerSection;
