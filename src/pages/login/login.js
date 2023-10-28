import React from 'react'
import './login.css'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginContainer'>
        <div className='loginWrapper'>
            <div className='loginIntro'>
                <div className='introContent'>  
                    <Link to='/' className='back'><FaArrowLeft /></Link>
                    <h2>Welcome To</h2>
                    <h1>Digital Marketing Agency</h1>
                    <p>Discover Grow And Manage Your Busniss With Small Choices And Modern Features </p>
                </div>
            </div>
            <div className='loginForm'>
                <div className='loginContent'>
                    <h1>Sign In</h1>
                    <form>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password' />
                        <button type='submit' >Login</button>
                    </form>
                    <p>You Don't Have An Account Yet? You Can<Link to='/register'><span className='signUp'> Sign up</span></Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login