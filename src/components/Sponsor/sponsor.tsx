import './sponsor.css';
import Sponsor from "./sponsor.svg?react";

const SponsorSection: React.FC = () => {

    return (
        <div className="sponsor-section">
             <Sponsor className="background-svg" />
            <div className="section-title">SPONSORS</div>
        </div>
    );
}

export default SponsorSection;
