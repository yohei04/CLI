import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Airline from './Airline';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/airlines.json')
      .then((res) => {
        setAirlines(res.data.data);
      })
      .catch((res) => console.log(res));
  }, [airlines.length]);

  const grid = airlines.map((item) => (
    <Airline key={item.attributes.name} attributes={item.attributes}></Airline>
  ));

  console.log(airlines);

  return (
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <div className="subheader">Honest, unbiased airline reviews.</div>
      </div>
      <div className="grid">
        <ul>{grid}</ul>
      </div>
    </div>
  );
};

export default Airlines;
