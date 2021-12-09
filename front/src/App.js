import React from 'react';

import './app.css'

//Components
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import About from './Components/About'
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;