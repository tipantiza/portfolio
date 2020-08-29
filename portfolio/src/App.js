import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/nav';
import homePage from './components/homePage';

function App() {
  return (
   <>
    <PersistentDrawerLeft/>
    <img style={{height:'100vh', width:"100vw"}} src={require("./docs/toronto_cn.jpg")} alt="landscape"/>
   </>
  );
}

export default App;
