import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo1 from '../../assets/logo1.png'

function Navbar() {
  return (
    <nav className='main-nav'>
        <img
          className='logo1'
          src={logo1}
          alt='logo'
        />
        
        <div className='nav-links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Sign Up</Link>
            </li>
          </ul>
        </div>


      </nav>
  )
}

export default Navbar