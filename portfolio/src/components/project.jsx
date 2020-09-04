import React from "react";
import Card from '@material-ui/core/Card';

export default function Project(props){
  const {image, title, desc, stack} = props
  return (
    <Card style={{width:'80vw', background:"#2c2e2e", color:'white',display:"flex", borderRadius:"5px", height:"200px"}}>
      <div style={{width:"28%", height:"inherit", msOverflowX:"hidden"}}>

      <img style={{height:"inherit"}} src={require(`../docs/${image}`)} alt="landon"></img>
      </div>
      <div style={{padding:"30px",width:"72%", display:'flex', flexDirection:"column", alignItems:'center', justifyContent:"center",}}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>Stack: {stack.map(tech => tech + ', ')}</p>
      </div>
    </Card>
  )
}

