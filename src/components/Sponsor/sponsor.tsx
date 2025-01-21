import "./sponsor.css";
import Sponsor from "./sponsor.svg?react";

interface SponsorData {
  name: string;
  logo: string;
  tier: "cedar" | "redwood" | "willow" | "oak";
}

const sponsors: SponsorData[] = [
  // Cedar
  { name: "NVIDIA", logo: "/sponsors/nvidia.png", tier: "cedar" },
  { name: "Google", logo: "/sponsors/google.png", tier: "cedar" },
  { name: "Tesla", logo: "/sponsors/tesla.png", tier: "cedar" },
  { name: "Taisu Ventures", logo: "/sponsors/taisu.png", tier: "cedar" },
  { name: "Liquid AI", logo: "/sponsors/liquid.png", tier: "cedar" },
  { name: "Zoom", logo: "/sponsors/zoom.png", tier: "cedar" },
  { name: "Perplexity", logo: "/sponsors/perplexity.png", tier: "cedar" },
  { name: "Stanford Ecopreneurship", logo: "/sponsors/ecopreneurship.png", tier: "cedar" },
  { name: "Vercel", logo: "/sponsors/vercel.png", tier: "cedar" },
  { name: "Terra API", logo: "/sponsors/terra.png", tier: "cedar" },
  { name: "Eigenlayer", logo: "/sponsors/eigen-layer.png", tier: "cedar" },

  // Redwood (only have one, so we can put it in the cedar sizing)
  { name: "InterSystems", logo: "/sponsors/intersystems.png", tier: "cedar" },

  // Willow
  { name: "Chroma", logo: "/sponsors/chroma.png", tier: "willow" },
  { name: "Vespa.ai", logo: "/sponsors/vespa.png", tier: "willow" },
  { name: "Groq", logo: "/sponsors/groq.png", tier: "willow" },
  { name: "Codeium", logo: "/sponsors/codeium.png", tier: "willow" },
  { name: "Pear VC", logo: "/sponsors/pear.png", tier: "willow" },
  { name: "Context", logo: "/sponsors/context.png", tier: "willow" },
  { name: "Eleven Labs", logo: "/sponsors/elevenlabs.png", tier: "willow" },
  { name: "Mistral", logo: "/sponsors/mistral.png", tier: "willow" },
  { name: "Scrapybara", logo: "/sponsors/scrapybara.png", tier: "willow" },
  { name: "Elastic", logo: "/sponsors/elastic.png", tier: "willow" },
  { name: "Modal", logo: "/sponsors/modal.png", tier: "willow" },
  { name: "Flutterflow", logo: "/sponsors/flutterflow.png", tier: "willow" },
  { name: "Rox", logo: "/sponsors/rox.png", tier: "willow" },
  { name: "Hudson River Trading", logo: "/sponsors/hrt.png", tier: "willow" },
  { name: "Luma Labs", logo: "/sponsors/luma.png", tier: "willow" },
  { name: "Otsuka x Valuenex (co-sponsor)", logo: "/sponsors/otsuka-valuenex.png", tier: "willow" },

  // Oak
  { name: "Neo", logo: "/sponsors/neo.png", tier: "oak" },
  { name: "Warp", logo: "/sponsors/warp.png", tier: "oak" },
  { name: "Paradigm", logo: "/sponsors/paradigm.png", tier: "oak" },
  { name: "DE Shaw", logo: "/sponsors/de-shaw.png", tier: "oak" },
  { name: "Orbstack", logo: "/sponsors/orbstack.png", tier: "oak" },
  { name: "Codegen", logo: "/sponsors/codegen.png", tier: "oak" },
  { name: "Delve", logo: "/sponsors/delve.png", tier: "oak" },
  { name: "DAIN Labs", logo: "/sponsors/dain.png", tier: "oak" },
  { name: "OpenAI", logo: "/sponsors/openai.png", tier: "oak" },
  { name: "LangChain", logo: "/sponsors/langchain.png", tier: "oak" },
  { name: "Cartesia", logo: "/sponsors/cartesia.png", tier: "oak" },
];

const SponsorTier: React.FC<{ tier: string; sponsors: SponsorData[] }> = ({ tier, sponsors }) => (
  <div className={`sponsor-tier ${tier}-tier`}>
    <div className="sponsor-grid">
      {sponsors.map((sponsor) => (
        <div key={sponsor.name} className="sponsor-logo-container">
          <img 
            src={sponsor.logo} 
            alt={`${sponsor.name} logo`} 
            className="sponsor-logo"
          />
        </div>
      ))}
    </div>
  </div>
);

const SponsorSection: React.FC = () => {
  const tiers = ["cedar", "redwood", "willow", "oak"];
  
  return (
    <div className="sponsor-section">
      <div className="sponsor-section-content">
        <h2 className="sponsor-title">SPONSORS</h2>
        {tiers.map((tier) => (
          <SponsorTier
            key={tier}
            tier={tier}
            sponsors={sponsors.filter((s) => s.tier === tier)}
          />
        ))}
      </div>
      <Sponsor className="background-svg" />
    </div>
  );
};

export default SponsorSection;
