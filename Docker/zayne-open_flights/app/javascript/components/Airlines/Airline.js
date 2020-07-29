import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Airline = ({ attributes }) => {
  return (
    <div className="card">
      <div className="airline-logo">
        <img src={attributes.image_url} alt={attributes.name} />
      </div>
      <div className="airline-name">{attributes.name}</div>
      <div className="airline-score">{attributes.avg_score}</div>
      <div className="airline-link">
        <Link to={`/airlines/${attributes.slug}`}>View Airline</Link>
      </div>
    </div>
  );
};

export default Airline;
