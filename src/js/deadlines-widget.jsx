import React from 'react';
import { deadlines } from './content.json';

export default () => {
  const now = new Date();

  return (
    <div className="deadlines-widget">
      {deadlines.map(({ label, date }) => {
        let d = new Date(date);
        return (
          <div key={label} className={now > d ? 'past' : ''}>
            {label} deadline: <span>{d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' })}</span>
          </div>
        );
      })}
    </div>
  );
};
