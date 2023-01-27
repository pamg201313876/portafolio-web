import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Skills } from './Components/Skills';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Themes/Theme'
import { AnimatePresence } from 'framer-motion';
import "./Styles/home.css"
import ScrollToTop from './Components/ScrollToTop';

function App() {

  const project = React.useRef(null);
  const skills = React.useRef(null);
  const contact = React.useRef(null);
  const home = React.useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }


  return (
    <ThemeProvider theme={theme}>


      <div ref={home}>
        <NavBar
          scrollToSection={scrollToSection}
          home={home}
          project={project}
          skills={skills}
          contact={contact}
        />
      </div>

      <div className='picture-bg' style={{ padding: "25px 5px" }}>

        <ScrollToTop />

        <div className='home'>
          <Home />
        </div>

        <div ref={project} className='projects'>
          <Projects />
        </div>

        <div ref={skills} className='skills'>
          <Skills />
        </div>

        <div ref={contact} className='contact'>
          <Contact />
        </div>
      </div>

    </ThemeProvider>

  );
}

export default App;