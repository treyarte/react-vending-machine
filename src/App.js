import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Snack from './Snack';

import Special from './Special';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/bento'>
          <Snack snack='Bento' snackIcon='🍱' />
        </Route>
        <Route exact path='/onigiri'>
          <Snack snack='Onigiri' snackIcon='🍙' />
        </Route>
        <Route exact path='/ramen'>
          <Snack snack='Ramem' snackIcon='🍜' />
        </Route>
        <Route exact path='/narutomaki'>
          <Snack snack='Narutomaki' snackIcon='🍥' />
        </Route>
        <Route exact path='/special'>
          <Special />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
