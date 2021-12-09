import React from 'react'

import './intro.css'

import resume from '../documents/Resume.pdf'

function Intro() {
  return (
    <div className="intro">
      <div className="text-box">
        <span id="hello">Hello! I'm</span>
        <br></br>
        <span id="carolyn">Carolyn <span id="gregoris">Gregoris</span></span> 
        <br></br>
        <span id="intro-p">A <span id="developer">full-stack web developer</span> using my passion to build creative and intuitive digital products.</span>

        <div className="socialsResume">
        <a href={resume} alt="Carolyn Gregoris Resumé" target="_blank" className="resumeLink">Resumé</a>
        <ul className="socialsList">
          <li>
            <a href="https://github.com/cascobie" target="_blank"><i class="fab fa-github"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/carolyn-gregoris-scobie-24b953159/" target="_blank"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>

        <i class="fas fa-angle-double-down"></i>
      </div>
    </div>
  )
}

export default Intro
