import React from "react";
import "../general.css"
import { requirePropFactory } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import MediaControlCard from "./tech";
import Tech from "./tech";

export default function About(props){

  return (
    <>
      <div style={{ height:"110vh", width:'100vw', borderBottomStyle:"solid", borderWidth:"1px", display:"flex", flexDirection:"column",  alignItems:'center'}}>
        <h1 id="about" style={{alignSelf:"center", color:"white", margin:"30px", paddingTop:"60px"}}>
          About
        </h1>

        <div style={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>


        <div style={{ width:"30vw", alignItems:'center', display:"flex", flexDirection:"column"}}>
          {/* <div style={{height:"100%", width:"30vw"}}> */}
          <div style={{width:'15vw', borderRadius:"100%", height:"15vw", marginTop:"58.9px", overflow:'hidden', display:"flex", justifyContent:"center"}} >
           <img style={{height:"15vw"}}  src={require("../docs/Screen Shot 2020-09-02 at 1.13.17 PM.png")} alt="landscape"/>

          </div>
          {/* </div> */}
            <p style={{ color:"white"}}>
            Full stack web developer with a passion for problem solving and finding solutions. When a friend introduced me to coding I immediately realized Web Development was a perfect opportunity to continue improving my skills in efficiency and creativity. I look forward to contributing outside-of-the-box solutions and growing in the industry.
            </p>

        </div>
          <div style={{width:"50vw", display:"flex", alignItems:"center", flexDirection:"column"}}>
           <h2 style={{color:"white", textDecoration:"underline"}}>Tech</h2>
           <div style={{height:"100%", width:"100%",display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>

           <Tech images={['javascriptLogo.png', 'css.png', 'html.png', 'git.png', 'node.png', 'react.png', 'sql.png']}/>
           </div>
          </div>


        </div>
      </div>
      
    </>
  )
}
//margin:"5vh 10vh",
//style={{height:"700px", width:"300px",display:"flex", justifyContent:"center", overflow:"hidden"}}
//style={{width:'300%', height:""}}