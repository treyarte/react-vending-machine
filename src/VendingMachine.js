import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className='vending-machine'>
      <div className='vending-machine-container'>
        <h2>Vending Maching</h2>

        <ul>
          <li>
            <Link to='/bento'>Bento</Link>
          </li>
          <li>
            <Link to='/onigiri'>Onigiri</Link>
          </li>
          <li>
            <Link to='/ramen'>Ramen</Link>
          </li>
          <li>
            <Link to='/narutomaki'>Narutomaki</Link>
          </li>
          <li>
            <Link to='/special'>Special</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendingMachine;
