import React from "react";

export default function Tech(props){
  const {images} = props
  return (
    <>
     {images.map(image => <img style={{height:"7vw", width:"auto", margin:"10px 20px"}} src={require(`../docs/${image}`)} alt="landscape" ></img>)}

    </>
  )
}