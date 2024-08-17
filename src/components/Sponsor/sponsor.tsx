import "./sponsor.css";
import Sponsor from "./sponsor.svg?react";

const SponsorSection: React.FC = () => {
  return (
    <div className="sponsor-section">
      <Sponsor className="background-svg" />
      <div className="sponsor-title">SPONSORS</div>
      <div className="sponsor-text">Coming Soon...</div>
    </div>
  );
};

export default SponsorSection;
