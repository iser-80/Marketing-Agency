import React from 'react'
import './register.css'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='registerContainer'>
        <div className='registerWrapper'>
            <div className='registerForm'>
                <Link to='/' className='back'><FaArrowLeft /></Link>
                <div className='registerContent'>
                    <h1>Sign Up</h1>
                    <form>
                        <input type='text' placeholder='Username' />
                        <input type='phone' placeholder='Phone' />
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password' />
                        <button type='submit' >Register</button>
                    </form>
                    <p>You Already Have An Account ? You Can<Link to='/login'><span className='signIn'> Sign In</span></Link></p>
                </div>
            </div>
            <div className='registerIntro'>
                <div className='introContent'>  
                    <h2>Welcome To</h2>
                    <h1>Digital Marketing Agency</h1>
                    <p>Discover Grow And Manage Your Busniss With Small Choices And Modern Features </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register