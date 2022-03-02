import React from 'react'


import './projects.css'
import mrDesktop from '../Images/mood-reads-desktop.png';
import mrMobile from '../Images/mood-reads-mobile.png';
import mp from '../Images/moon-phase-desktop.png';
import mpMobile from '../Images/moon-phase-mobile.png';
import pbMobile from '../Images/plant-buddy-mobile.png';
import pbDesktop from '../Images/plant-buddy-desktop.png';
import cDesktop from '../Images/covid-cases-desktop.png';
import cMobile from '../Images/covid-cases-mobile.png';
import artDesktop from '../Images/art-dt.png';

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
          <div>
            <img className="dt-img" src={mrDesktop} />
          </div>
          <img className='mobile-img' src={mrMobile} />
        </div>
        <div className="container-text">
          <h3>Mood Reads</h3>

          <p>Mood reads is a book recommendation generator that recommends a book to read based on a chosen mood. A fully responsive, front-end app built in React with hooks and functional components.</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <i class="fab fa-react"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-js-square"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-html5"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-css3"></i>
            </div>
          </div>
          <div className="container-projects-btns">
            <a href='http://mood-reads.herokuapp.com/' target='_blank'>Live</a>
            <a href='https://github.com/cascobie/mood-reads' target='_blank'>Repo</a>
          </div>
        </div>
      </div>
      
      <div className="projects-containter even">
        <div className="container-img">
          <div>
          <img className="dt-img" src={mp} />
          </div>
          <img className='mobile-img' src={mpMobile} />
        </div>
        <div className="container-text">
          <h3>Moon Phase App</h3>
          <p>Using the Farmsense API, Moon Phase App shows the phase that the moon is currently in. After doing some research, I found the Farmsense API which returns the phase of the moon based on a Unix Timestamp. One of the interesting parts of this project was using javascript to convert the current date and time into Unix time, which the API understands, and then converting it back into a human-readable format to present to the user. I used the images from the Nasa Website, which is allowed if it is for educational purposes. This app was inspired by my love of nature and the night sky.</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <i style={{color: "#ff3b3f"}} class="devicon-jquery-plain"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-js-square"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-html5"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-css3"></i>
            </div>
          </div>
          <div className="container-projects-btns">
            <a href='http://moon-phases-caro.herokuapp.com/' target='_blank'>Live</a>
            <a href='https://github.com/cascobie/moon-phase' target='_blank'>Repo</a>
          </div>
        </div>
      </div>


      <div className="projects-containter">
        <div className="container-img">
          <div>
          <img className="dt-img" src={pbDesktop} />
          </div>
          <img className='mobile-img' src={pbMobile} />
        </div>
        <div className="container-text">
          <h3>Plant Care App</h3>
          <p>Plant Buddy is a plant care app that has all the information needed to keep your houseplants alive and healthy in a clear, easy-to-read format. Built in React with hooks and functional components, with the help of Firestore. I had been wanting to build an app using Firestore for a while since it allows you to build serverless apps with a database and it was an easy and straightforward way to store and sync all my plant data. It also allowed me to get some practice with non-relational databases.</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <i class="fab fa-react"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-js-square"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-html5"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-css3"></i>
          </div>
          </div>
          <div className="container-projects-btns">
            <a href='https://plant-buddy-f9d16.web.app/' target='_blank'>Live</a>
            <a href='https://github.com/cascobie/plant-buddy' target='_blank'>Repo</a>
          </div>
        </div>
      </div>

      <div className="projects-containter even">
        <div className="container-img">
          <div>
          <img className="dt-img" src={cDesktop} />
          </div>
          <img className='mobile-img' src={cMobile} />
        </div>
        <div className="container-text">
          <h3>Covid Tracker</h3>
          <p>An app that dynamically returns active Covid cases in each province over the past week. I used the API for the COVID-19 Canada Open Data Working Group dataset. The API allows you to enter a date and will return all information after the date specified. I created a function that dynamically gives the API the date 7 days from today, in the format dd-mm-yyyy.</p>
          <div className="container-icons-mini">
          <div className="box-icon">
              <i class="fab fa-react"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-js-square"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-html5"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-css3"></i>
            </div>
          </div>
          <div className="container-projects-btns">
            <a href='https://canada-covid-cases.herokuapp.com/' target='_blank'>Live</a>
            <a href='https://github.com/cascobie/covid-cases' target='_blank'>Repo</a>
          </div>
        </div>
      </div>

      <div className="projects-containter">
        <div className="container-img">
          <div>
          <img className="dt-img" src={artDesktop} />
          </div>
        </div>
        <div className="container-text">
          <h3>Mindful Art</h3>
          <p>Use this painting app to channel your inner Bob Ross and paint while listening to calming nature sounds. I built this app with the PERN stack - PostgreSQL, Express, React, and Nodejs. To access the Canvas, the user has to register for an account. I built it this way to get practice using JSON Web Tokens, which I used to allow the user to stay logged in after a page refresh for a given amount of time. The nature sounds came from Nature Radio - a non-profit organization created to archive and share the natural sounds from the world's national parks and protected areas. This is a destkop-only app.</p>
          <div className="container-icons-mini">
            <div className="box-icon">
              <i class="fab fa-react"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-js-square"></i>
            </div>
            <div className="box-icon">
              <i style={{color: "#ff3b3f"}} class="devicon-nodejs-plain"></i>
            </div>
            <div className="box-icon">
              <i style={{color: "#ff3b3f"}} class="devicon-express-original"></i>
            </div>
            <div className="box-icon">
              <i style={{color: "#ff3b3f"}} class="devicon-postgresql-plain"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-html5"></i>
            </div>
            <div className="box-icon">
              <i class="fab fa-css3"></i>
            </div>
          </div>
          <div className="container-projects-btns">
            <a href='https://github.com/cascobie/canvas-app' target='_blank'>Repo</a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects
