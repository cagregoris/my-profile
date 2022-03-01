import React from 'react'
import picture from '../Images/profile.png'
import './about.css'

function About() {
  return (
    <section className="about" id="about">

      <div className="about-me">
        <span>About Me</span>
      </div>
      
      <div className="about-contents">

      <div className="row">
        <div className="about-pic-pic">
        <div className="about-pic">
          <img id="image" src={picture}/>
        </div>
        </div>

        <div className="about-text">
          <div>
          <span>I recently graduated from the <span className="orange">Lighthouse Labs Web Development bootcamp.</span> I also have a Bachelor of Commerce degree from the University of Calgary and a background as a Financial Planner.</span>
          </div>
          <br></br>
          <div>
          <span>I love web development because I am passionate about lifelong learning and solving problems through code!</span>
          </div>
          <br></br>
          <div>
          <span>I am happiest when I am using my passion to help others pursue theirs, and  <span className="orange">I can't wait to work alonside other amazing programmers and learn so much more!</span></span>
          </div>
        </div>
      </div>

      </div>


      
      
    </section>
  )
}

export default About
