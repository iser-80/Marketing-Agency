import React from 'react'
import './register.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { registerAsync } from '../../slices/userApiSlice'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleRegister (e) {
        e.preventDefault()

        dispatch(registerAsync({name, email, password}))
        navigate('/login')

        setName('')
        setEmail('')
        setPassword('')
    }

  return (
    <div className='registerContainer'>
        <div className='registerWrapper'>
            <div className='registerForm'>
                <Link to='/' className='back'><FaArrowLeft /></Link>
                <div className='registerContent'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleRegister}>
                        <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Username' />
                        <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                        <button type='submit'>Register</button>
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