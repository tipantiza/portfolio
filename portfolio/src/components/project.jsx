import React from "react";
import Card from '@material-ui/core/Card';

export default function Project(props){
  const {image, title, desc, stack, url} = props
  return (
    <a href={url} target='_blank' style={{width:'80vw', background:"#2c2e2e", color:'white', display:"flex", borderRadius:"5px", height:"200px", margin:"20px"}}>
      <div style={{width:"28%", height:"inherit", msOverflowX:"hidden", display:"flex", justifyContent:"center", alignItems:"center"}}>

      <img style={{height:'auto', width:"300px"}} src={require(`../docs/${image}`)} alt="landon"></img>
      </div>
      <div style={{padding:"30px",width:"72%", display:'flex', flexDirection:"column", alignItems:'center', justifyContent:"center",}}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>Stack: {stack.map(tech => tech + ', ')}</p>
      </div>
    </a>
  )
}
