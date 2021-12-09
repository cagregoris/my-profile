import React from 'react'

import './intro.css'

function Intro() {
  return (
    <div className="intro">
      <div className="text-box">
        <span id="hello">Hello! I'm</span>
        <br></br>
        <span id="carolyn">Carolyn</span>
        <br></br>
        <span id="intro-p">A <span id="developer">full-stack web developer</span> using my passion to build creative and intuitive digital products.</span>
        <i class="fas fa-angle-double-down"></i>
      </div>
    </div>
  )
}

export default Intro
