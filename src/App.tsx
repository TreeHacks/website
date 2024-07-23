import React from 'react';
import ParallaxSection from './components/Parallax/Parallax';
import NavigationBar from './components/NavBar/NavBar';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="home">
      <NavigationBar />
      <ParallaxSection />
    </div>
  );
}

export default App;
