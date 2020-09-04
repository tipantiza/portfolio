import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/nav';
import HomePage from './components/homePage';
import ProjectPage from './components/projectPage';
import About from './components/about'

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
