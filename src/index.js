import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './js/navbar.jsx';
import Circuit from './js/circuit.jsx';
import Home from './js/home.jsx';
import Verticals from './js/verticals.jsx';
import About from './js/about.jsx';
import Projects from './js/projects.jsx';
import FAQ from './js/faq.jsx';
import Sponsors from './js/sponsors.jsx';
import GreenLine from './js/green-line.jsx';
import './index.scss';


function App() {
  return (
    <div>
      <Navbar />
      <Circuit />
      <GreenLine />
      <Home />
      <Verticals />
      <About />
      <Projects />
      <FAQ />
      <Sponsors />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

