import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

import './app.css'

//Components
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import About from './Components/About'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer'
import ContactForm from './Components/ContactForm';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_4i9d95r', e.target, 'user_JizLMspZ5Ltbe9Tr9kSxu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setIsSubmitted(true);
      e.target.reset();
  };

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About /> 
      <Skills />
      <Projects />
      <Contact sendEmail={sendEmail} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
      <Footer /> 
    </div>
  );
}

export default App;