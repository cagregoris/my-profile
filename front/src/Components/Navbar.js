import React from 'react'

import './navbar.css'

import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/" spy={true} smooth={true}><a>CG.</a></Link>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true}><a>About</a></Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true}><a>Skills</a></Link>
          </li>
          <li>
          <Link to="projects" spy={true} smooth={true}><a>Projects</a></Link>
          </li>
          <li>
          <Link to="contact" spy={true} smooth={true}><a>Contact</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
