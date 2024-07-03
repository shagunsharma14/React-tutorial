import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div>
        <nav>
            <a href='/'><li>Home</li></a> 
            <a href='/about'><li>About</li></a>
            <a href='/login'><li>Login</li></a>
        </nav>
    </div>
  )
}

export default Navbar