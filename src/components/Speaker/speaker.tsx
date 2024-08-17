import './speaker.css';
import Speaker from "./speaker.svg?react";

const SpeakerSection: React.FC = () => {

    return (
        <div className="speaker-section">
             <Speaker className="background-svg" />
            <div className="section-title">SPEAKERS</div>
        </div>
    );
}

export default SpeakerSection;