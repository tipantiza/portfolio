import React from 'react';
export default function HomePage (){
  return (
    <div style={{position: 'relative', display: 'flex', justifyContent:"center"}}>
      <img style={{ width:"100vw"}} src={require("../docs/toronto_cn.jpg")} alt="landscape"/>
      <h1 className='title-font' style={{ fontSize:'3vw',color: 'white', position: 'absolute', top: '10vh'}}>Once you stop learning, you start dying -Albert Einstein</h1>
    </div>
  )
}


//while(!(succeed = try()));