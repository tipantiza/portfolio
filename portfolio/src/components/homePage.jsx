import React from 'react';
// not working for some reason I have to look into it, image isnt importing properly i can only use the image tag in App.js, but i have the image loading ill look into it later. 
export default function HomePage (){
  return (
    <div style={{position: 'relative', display: 'flex', justifyContent:"center"}}>
      <img style={{height:'100vh', width:"100vw"}} src={require("../docs/toronto_cn.jpg")} alt="landscape"/>
      <h1 className='title-font' style={{ color: 'white', position: 'absolute', top: '10vh'}}>Once you stop learning, you start dying -Albert Einstein</h1>
    </div>
  )
}

//while(!(succeed = try()));