import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Snack.css';

const Snack = ({ snack, snackIcon }) => {
  const [snacks, setSnack] = useState([]);

  const addSnack = () => {
    setSnack((s) => [...s, snackIcon]);
  };

  return (
    <div>
      <h2>
        {snack} # {snacks.length}
      </h2>

      <div className='snack-container'>
        {snacks.map((s, index) => (
          <span key={index}>{snackIcon}</span>
        ))}
      </div>
      <div className='button-container'>
        <button onClick={addSnack}>Buy {snack}</button>
        <Link to='/'>Back</Link>
      </div>
    </div>
  );
};

export default Snack;
