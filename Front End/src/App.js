// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 


import Header from './components/Header';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Projects from './pages/Projects'; 
import Contact from './components/Contact';



import './SCSS/main.scss';


const App = () => {
  return (
    <Router> 
      <Header />
            <section id="presentation">
                <Presentation />
            </section>
            <hr className="separator"></hr>
            <section id="competences">
                <Skills />
            </section>
            <hr className="separator"></hr>
            <section id="projects">
          <Projects />
      </section>
      <hr className='separator'></hr>
      <section id="contact">
        <Contact />
      </section>
    </Router>
  );
};

export default App;
