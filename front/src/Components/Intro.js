import React, {useState, useEffect} from 'react'

import './intro.css'

import resume from '../documents/Resume.pdf'

import {Link} from 'react-scroll';

function Intro() {


  const placeholderText = ["plant mom 🌿", "book worm 📚", "dog mom 🐶", "baker 🍰", "hiker ⛰", "and tennis player 🎾"];

  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState((s) => (s + 1));
    }, 2000);
  }, []);

  const placeholder = placeholderText[state % placeholderText.length]


  return (
    <div className="intro" id="/">
      <div className="text-box">
        <span id="hello">Hello! I'm</span>
        <br></br>
        <span id="carolyn">Carolyn <span id="gregoris">Gregoris</span></span>
        <br></br>
        <span id="intro-p">A <span id="developer">full-stack web developer</span> and part-time <span>{placeholder}</span> </span>

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
        <Link to="about" spy={true} smooth={true}><i class="fas fa-angle-double-down"></i></Link>
      </div>
      {/* <div className="angle-1"><span>ANGLE</span></div> */}
    </div>
  )
}

export default Intro
