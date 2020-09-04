import React from 'react';
import '../general.css'
import Project from './project';

export default function ProjectPage(props){
  return (
    <>
      <div style={{height:"100vh", width:"100vw", display:"flex", color:"white", alignItems:"center", flexDirection:"column"}}>
        <h1 id="projects" style={{margin:"30px", paddingTop:"60px"}}>
          Projects
        </h1>
        <Project title="Slightly Bad Directions" desc='Users can create, edit and delete a map, but the twist is the directions will be a few blocks off. This forces the user who is looking for a specific place to get to know the area better!' stack={["jQuery", "HTML", "Sass", "Node", "Express", "SQL"]} image='landon.jpg'/>
      </div>
    </>
  )
}