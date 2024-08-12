/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import ParallaxSection from './components/Parallax/Parallax';
import AboutSection from './components/About/about';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <ParallaxSection />
    </div>
  );
}

export default App;
