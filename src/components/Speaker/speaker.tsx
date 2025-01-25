import "./speaker.css";
import Speaker from "./speaker.svg";

interface SpeakerCardProps {
  name: string;
  day: string;
  description: string;
  imagePath: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, day, description, imagePath }) => {
  return (
    <div className="speaker-card">
      <div className="day-label">{day}</div>
      <div className="speaker-image-container">
        <img src={imagePath} alt={name} className="speaker-image" />
      </div>
      <h2 className="speaker-name">{name}</h2>
      <p className="speaker-description">{description}</p>
    </div>
  );
};

const SpeakerSection: React.FC = () => {
  const speakers = [
    {
      name: "DJ PATIL",
      day: "FRIDAY",
      description: "DJ Patil, former U.S. Chief Data Scientist under President Obama, is a pioneer in data science with experience at LinkedIn, Skype, and PayPal. Now a General Partner at GreatPoint Ventures, he focuses on healthcare, enterprise tech, and national security.",
      imagePath: "/speakers/DJ PATIL.jpeg"
    },
    {
      name: "JOHN HENNESSY",
      day: "SATURDAY",
      description: `John L. Hennessy, Alphabet chairman and co-founder of MIPS and Atheros, is a Turing Award-winning computer scientist. Stanford's 10th president (2000-2016), he's been called "the godfather of Silicon Valley" for his contributions to RISC architecture and Wi-Fi technology.`,
      imagePath: "/speakers/JOHN HENNESSY.jpeg"
    },
    {
      name: "WOJCIECH ZAREMBA",
      day: "SUNDAY",
      description: "Wojciech Zaremba, co-founder of OpenAI, leads research on Codex and language models. A math prodigy with two master's degrees and a PhD in deep learning, he works on advancing AI's capabilities in coding and language understanding.",
      imagePath: "/speakers/WOJCIECH ZAREMBA.jpeg"
    }
  ];

  return (
    <div className="speaker-section" style={{ backgroundImage: `url(${Speaker})` }}>
      <div className="speaker-section-content">
        <div className="speaker-title">KEYNOTE SPEAKERS</div>
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.name}
              name={speaker.name}
              day={speaker.day}
              description={speaker.description}
              imagePath={speaker.imagePath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
