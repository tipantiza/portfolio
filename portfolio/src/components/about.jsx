import React from "react";
import "../general.css"
import { requirePropFactory } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

export default function About(props){

  return (
    <>
      <div style={{ height:"100vh", width:'100vw', display:"flex", flexDirection:"column",  alignItems:'center'}}>
        <h1 style={{alignSelf:"center", color:"white", margin:"30px"}}>
          About
        </h1>

        <div style={{width:"100vw", display:"flex"}}>


        <div style={{marginLeft:'30px', width:"40vw", alignItems:'center', display:"flex", flexDirection:"column"}}>
          {/* <div style={{height:"100%", width:"30vw"}}> */}
          <div style={{width:'30vw', borderRadius:"2px", height:"30vw", marginTop:"58.9px", overflow:'hidden', display:"flex", justifyContent:"center"}} >
           <img style={{height:"30vw"}}  src={require("../docs/Screen Shot 2020-09-02 at 1.13.17 PM.png")} alt="landscape"/>

          </div>
          {/* </div> */}
            <p style={{ color:"white", margin:"10px"}}>
              this is the description of who i am and i want it it to be around 4-5 sentences. this is the description of who i am and i want it it to be around 4-5 sentences. this is the description of who i am and i want it it to be around 4-5 sentences. this is the description of who i am and i want it it to be around 4-5 sentences. this is the description of who i am and i want it it to be around 4-5 sentences.
            </p>

        </div>
          <div style={{width:"60vw"}}>
           lksdfjad
          </div>


        </div>
      </div>
      
    </>
  )
}
//margin:"5vh 10vh",
//style={{height:"700px", width:"300px",display:"flex", justifyContent:"center", overflow:"hidden"}}
//style={{width:'300%', height:""}}