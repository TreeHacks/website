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

      <ParallaxProvider>
        <ParallaxSection />
      </ParallaxProvider>

      <div>
        <Layer1 width="100%" height="auto" display="block" />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
