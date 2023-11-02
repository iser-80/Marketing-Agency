import React from 'react'
import './home.css'
import logo from '../../asset/logo.svg'
import {FaArrowRightLong} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='homeContainer'>
        <div className='homeWrapper'>
            <div className='content'>
                <h1 className='title'> 
                    Digital <span className='logo'>Marketing</span> Agency
                </h1>
                <p className='description'>
                    We Help Your Brand To Grow Up On Social Media With Our Services 
                </p>
                <div className='getStarted'>
                    <Link to='/login' className='link'><button className='btn'>Get Started <FaArrowRightLong/></button></Link>
                    <p>+5000 followers</p>
                </div>
            </div>
            <div className='imageContainer'>
                <div className='image'>
                    <img src={logo} alt='test' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home