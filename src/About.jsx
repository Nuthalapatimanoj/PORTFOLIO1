import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="content">
        <h4 className='typing'>
          I'm <span >N MANOJ </span>, JAVA FULL-STACK DEVELOPER
        </h4>
        <p>I specialize in building modern and responsive web applications.</p>
        <div>
          <button onClick={() => window.location="#projects"}>Projects</button> 
          <button onClick={() => window.location="#contact"}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default About