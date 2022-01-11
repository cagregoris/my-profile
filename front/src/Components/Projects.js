import React from 'react'
import cactus from '../Images/cactus.svg'


import './projects.css'

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-header">
        <div className="projects-title">
          <span>Projects</span>
        </div>
        <div className="projects-subtitle">
        <span> Some stuff that I've built..</span>
        </div>
      </div>

      <div className="projects-containter">
        <div className="container-img">
          <a>project image here</a>
        </div>
        <div className="container-text">
          <h3>PROJECT 1</h3>
          <p>Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
          </div>
          <div className="container-projects-btns">
            <a>Live</a>
            <a>Repo</a>
          </div>
        </div>

      </div>
      
      <div className="projects-containter">
        <div className="container-img">
          <a>project image here</a>
        </div>
        <div className="container-text">
          <h3>PROJECT 1</h3>
          <p>Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project Description of project</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
            <div className="box-icon">
              <a>icon</a>
            </div>
          </div>
          <div className="container-projects-btns">
            <a>Live</a>
            <a>Repo</a>
          </div>
        </div>

      </div>
      <img className="cactus" src={cactus} />

    </section>
  )
}

export default Projects
