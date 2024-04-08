import React, { useState } from 'react';
import './App.css';
import Carousel from './Carousel';
import Counter from './Counter';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import DarkModeButton from './DarkModeButton';


function App() {


  return (
    <div className={`App`}>
      <Navbar></Navbar>
      Ahoj, čuuus ne
      <Jumbotron></Jumbotron>
      <Carousel></Carousel>
      <Counter></Counter>
      <DarkModeButton></DarkModeButton>
    </div>
  );
}

export default App;
