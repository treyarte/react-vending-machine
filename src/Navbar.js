import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className='vending-machine-nav'>
        <NavLink exact to='/'>
          Home
        </NavLink>
        <NavLink exact to='/bento'>
          Bento
        </NavLink>
        <NavLink exact to='/onigiri'>
          onigiri
        </NavLink>
        <NavLink exact to='/ramen'>
          Ramen
        </NavLink>
        <NavLink exact to='/narutomaki'>
          Narutomaki
        </NavLink>
        <NavLink exact to='/special'>
          Special
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
