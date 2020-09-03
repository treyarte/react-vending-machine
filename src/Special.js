import React from 'react';
import { Link } from 'react-router-dom';

const Special = () => {
  return (
    <div>
      <h2>Special</h2>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/6PQM1nqlJKI'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <div>
        <Link to='/'>Back</Link>
      </div>
    </div>
  );
};

export default Special;
