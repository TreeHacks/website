import "./sponsor.css";
import Sponsor from "./sponsor.svg?react";

const SponsorSection: React.FC = () => {
  return (
    <div className="sponsor-section">
      <div className="sponsor-section-content">
        <div className="sponsor-title">SPONSORS</div>
        <div className="sponsor-text">Coming Soon...</div>
      </div>
      <Sponsor className="background-svg" />
    </div>
  );
};

export default SponsorSection;
