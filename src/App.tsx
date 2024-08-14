/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import ParallaxSection from './components/Parallax/Parallax';
import NavigationBar from './components/NavBar/NavBar';
import './App.css'

const App: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <NavigationBar />
      <ParallaxSection />
    </div>
  );
}

export default App;
