import React from "react";

export default function Tech(props){
  const {images} = props
  return (
    <>
     {images.map(image => <img style={{height:"100px", width:"auto"}} src={require(`../docs/${image}`)} alt="landscape" ></img>)}

    </>
  )
}