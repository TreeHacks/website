import React from 'react';
import ReactDOM from 'react-dom';
import Section1 from './js/section1.jsx';
import './index.scss';

function App() {
  return (
    <div>
      <Section1 />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
