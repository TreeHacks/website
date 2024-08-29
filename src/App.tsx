/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxSection from "./components/Parallax/Parallax";
import NavigationBar from "./components/NavBar/NavBar";
import AboutSection from "./components/About/about";
import Layer1 from "./components/Parallax/layer1.svg?react";
import TrackSection from "./components/Track/track";
import SpeakerSection from "./components/Speaker/speaker";
import SponsorSection from "./components/Sponsor/sponsor";
import FAQSection from "./components/FAQ/faq";

const ORGANIZER_APP_URL = 'https://form.typeform.com/to/qq5pgpA3';

const App: React.FC = () => {
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);
  const [clientHeight, setClientHeight] = useState(document.documentElement.clientHeight);
  const isMobile = clientWidth <= 768;

  useEffect(() => {
    if (window.location.pathname === '/join') {
      window.location.href = ORGANIZER_APP_URL;
    }
  }, [window.location]);

  useEffect(() => {
    setClientWidth(document.documentElement.clientWidth);
    setClientHeight(document.documentElement.clientHeight);    
  }, [document.documentElement.clientWidth, document.documentElement.clientHeight])

  return (
    <div className="homepage">
      <NavigationBar />

      <section id="section1">
        <ParallaxProvider>
          <ParallaxSection clientWidth={clientWidth} clientHeight={clientHeight} isMobile={isMobile}  />
        </ParallaxProvider>
      </section>

      <section style={{ overflow: "hidden" }}>
        <Layer1
          width={isMobile ? "130%" : "100%"}
          height="auto"
          style={{
            display: "block",
            position: "relative",
            zIndex: 1,
            transform: isMobile ? "translateX(-15%)" : "none",
          }}
        />
      </section>

      <section id="section2">
        <AboutSection />
      </section>

      <section id="section3">
        <TrackSection />
      </section>

      <section id="section4">
        <SpeakerSection />
      </section>

      <section id="section5">
        <SponsorSection />
      </section>

      <section id="section6">
        <FAQSection />
      </section>
    </div>
  );
};

export default App;
