import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Nav';
import HomePage from './components/HomePage';
import About from './components/About';
import ProjectPage from './components/projectPage';

const description = "this is landons website it ois the best"


function App() {
  return (
   <>
    <PersistentDrawerLeft/>
    <HomePage/>
    <About/>
    <ProjectPage/>
   </>
  );
}

export default App;
