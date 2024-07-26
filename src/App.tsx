import React from 'react';
import ParallaxSection from './components/Parallax/Parallax';
import NavigationBar from './components/NavBar/NavBar';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="home">
      <div className="section1"><NavigationBar /></div>
      <div className="section2"><ParallaxSection /></div>
    </div>
  );
}

export default App;
