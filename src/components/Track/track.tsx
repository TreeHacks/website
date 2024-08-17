import './track.css';
import Track from "./track.svg?react";

const TrackSection: React.FC = () => {

    return (
        <div className="track-section">
             <Track className="background-svg" />
            <div className="section-title">TRACKS</div>
        </div>
    );
}

export default TrackSection;
