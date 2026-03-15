import React from "react";
import "./CSS/Project.css";

const Project = () => {

 const projects = [
 { 
  title:"Banking Application",
  desc:"Secure banking app for transfers, balances using Spring Boot, MySQL, React.",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Z-ZfPMRWV4Nu_SYhwAl1nrrd9tmxmeM2UQ&s"
 },

 { 
  title:"Hr Management System",
  desc:"Employee management system handling job opportunities using Spring Boot, MySQL, React.",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNM9LZRnoUtWl0kXwy39mhnFqIWjcfg8V3_A&s"
 },

 { 
  title:"Dice Game",
  desc:"Simple dice game generating random numbers using HTML, CSS, JavaScript.",
  img:"https://media.istockphoto.com/id/1132091114/photo/red-casino-dice.jpg?s=612x612&w=0&k=20&c=PzVY32K0wRapEEd0Uv-k17iIp4GOI-SsrOTB_ytVjh0="
 },

 { 
  title:"TnStartup Clone",
  desc:"Startup website clone showcasing programs and resources using React, Tailwind.",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvLPa70w0CY0Iz570VgMU-QM4OFpxhDR3FA&s"
 },

 { 
  title:"Portfolio",
  desc:"Personal portfolio website displaying projects, skills, contact built with React.",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGoTaxhw1aOq5dDMSLWsKViMTse_w_5iAiQ&s"
 }
];

  return (
    <div className="project" id="projects">
      <h2>Projects</h2>
      <div className="card">
        {projects.map((item,index)=>(
          <div className="card-item" key={index}>
            <img 
              src={item.img}
              alt="project"
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Project;