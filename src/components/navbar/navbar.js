import React from 'react'
import './navbar.css'
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
                        <div className='navLink' >Home</div>
                    </li>
                    <li>
                        <div className='navLink' >About</div>
                    </li>
                    <li>
                        <div className='navLink' >Projects</div>
                    </li>
                    <li>
                        <div className='navLink' >Contact</div>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    
  )
}

export default Navbar