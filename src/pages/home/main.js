import React from 'react'
import { Element } from 'react-scroll';
import Navbar from '../../components/navbar/navbar';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import Projects from '../../components/projects/projects';
import Contact from '../../components/contact/contact'

const Main = () => {
  return (
    <>
    <Navbar />
        <Home />
      <Element name='about'>
        <About />
      </Element>
      <Element name='projects'>
        <Projects />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </>
  )
}

export default Main