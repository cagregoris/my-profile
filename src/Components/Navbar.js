import React, {useState} from 'react'

import './navbar.css'

import {Link} from 'react-scroll';

function Navbar() {

  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/" spy={true} smooth={true}><a>CG.</a></Link>
      </div>

      {/* <div className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}> */}
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
         
            <Link to="about" spy={true} smooth={true} onClick={() => setIsMobile(false)}><li>About</li></Link>
         
            <Link to="skills" spy={true} smooth={true} onClick={() => setIsMobile(false)}><li>Skills</li></Link>
         
          <Link to="projects" spy={true} smooth={true} onClick={() => setIsMobile(false)}><li>Projects</li></Link>
          
          <Link to="contact" spy={true} smooth={true} onClick={() => setIsMobile(false)}><li>Contact</li></Link>
        </ul>
      {/* </div> */}

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>

    </div>
  )
}

export default Navbar
