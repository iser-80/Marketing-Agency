import React from 'react'
import './navbar.css'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
            <div className='navContainer'>
                <div className='navLogo'>
                    Mark-Agency
                </div>
                <ul>
                    <li>
                        <ScrollLink to="home" spy={true} smooth={true} duration={500} className='navLink' >Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="about" spy={true} smooth={true} duration={500} className='navLink' >About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="projects" spy={true} smooth={true} duration={500} className='navLink' >Projects</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contact" spy={true} smooth={true} duration={500} className='navLink' >Contact</ScrollLink>
                    </li>
                </ul>
                <div className='authContainer'>
                    <RouterLink to='/login' className='loginBtn' >Login</RouterLink>
                    <RouterLink to='/register' className='registerBtn' >Register</RouterLink>
                </div>
            </div>
        </nav>
    </>
    
  )
}

export default Navbar