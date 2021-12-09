import React from 'react'

import './navbar.css'

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <a>CG.</a>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
