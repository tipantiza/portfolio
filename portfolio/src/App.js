import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Nav';
import HomePage from './components/HomePage';
import About from './components/About';

function App() {
  return (
   <>
    <PersistentDrawerLeft/>
    <HomePage/>
    <About/>
    
   </>
  );
}

export default App;
