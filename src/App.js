import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Stack from './components/Stack';
import Separator from './components/Separator';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <Separator id="about_categ" />
      <About />
      <Separator id="experiences_categ" />
      <Experience />
      <Separator id="stack_categ" />
      <Stack />
      <Separator id="projects_categ" />
      <Projects />
      <Separator id="skill_categ" />
      <Skills />
      <Separator id="contact_categ" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;