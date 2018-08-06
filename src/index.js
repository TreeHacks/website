import React from 'react';
import ReactDOM from 'react-dom';
import Section1 from './js/section1.jsx';
import Section2 from './js/section2.jsx';
import Section3 from './js/section3.jsx';
import Section4 from './js/section4.jsx';
import './index.scss';

function App() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
