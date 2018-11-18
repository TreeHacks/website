import React from 'react';
import { deadlines } from './content.json';

export default () => {
  const now = new Date();

  return (
    <div className="deadlines-widget">
      {deadlines.map(({ label, date, display_date }) => {
        let d = new Date(date);
        return (
          <div key={label} className={now > d ? 'past' : ''}>
            {label} deadline: <span>{display_date || d.toLocaleString('en-US', { month: 'long', year: 'numeric', day: 'numeric' })}</span>
          </div>
        );
      })}
    </div>
  );
};
