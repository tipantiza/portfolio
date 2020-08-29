import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/nav';
import HomePage from './components/homePage';
import About from './components/about';

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
