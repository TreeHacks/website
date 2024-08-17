/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxSection from './components/Parallax/Parallax';
import NavigationBar from './components/NavBar/NavBar';
import AboutSection from './components/About/about';
import Layer1 from "./components/Parallax/layer1.svg?react";
import About from "./components/About/about.svg?react";

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />

      <section id="section1">
        <ParallaxProvider>
          <ParallaxSection />
        </ParallaxProvider>
      </section>
      
      <Layer1 width="100%" height="auto" display="block"/>
      <section id="section2">
        <AboutSection />
      </section>
    </div>
  );
}

export default App;
