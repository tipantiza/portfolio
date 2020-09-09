import React from 'react';
import '../general.css'
import Project from './project';
import projects from '../mockDatabase'
import {useState} from 'react'

export default function ProjectPage(props){
  const [projects1, setProjects] =  useState(projects.map(project => {
    return (<Project title={project.title} url={project.url} desc={project.desc} stack={project.stack} image={project.image}/>)
  }))
  return (
    <>
      <div style={{height:"auto", width:"100vw", display:"flex", color:"white", alignItems:"center", flexDirection:"column"}}>
        <h1 id="projects" style={{margin:"30px", paddingTop:"60px"}}>
          Projects
        </h1>
       {projects1}
      </div>
    </>
  )
}