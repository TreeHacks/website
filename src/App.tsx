/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxSection from './components/Parallax/Parallax';
import NavigationBar from './components/NavBar/NavBar';
import AboutSection from './components/About/about';
import Layer1 from "./components/Parallax/layer1.svg?react";
import TrackSection from './components/Track/track';
import SpeakerSection from './components/Speaker/speaker';
import SponsorSection from './components/Sponsor/sponsor';
import FAQSection from './components/FAQ/faq';

const App: React.FC = () => {
  return (
    <div className="homepage">
      <NavigationBar />

      <section id="section1">
        <ParallaxProvider>
          <ParallaxSection />
        </ParallaxProvider>
      </section>
      
      <Layer1 width="100%" height="auto" style={{ display: 'block', position: 'relative', zIndex: 1 }} />

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
}

export default App;
