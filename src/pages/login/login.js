import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './login.css'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { loginAsync } from '../../slices/userApiSlice'
import { setCredentials } from '../../slices/userAuth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch() 
    const {userInfo} = useSelector((state) => state.auth)

    function handleOnSubmit (e) {
        e.preventDefault()

        const response = dispatch(loginAsync({email, password}))
        if (loginAsync.fulfilled.match(response)) {
            const userData = response.payload; // Assuming your login response includes user data
            dispatch(setCredentials(userData));
        }

        setEmail('')
        setPassword('')
    }

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
                    <form onSubmit={handleOnSubmit}>
                        <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
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