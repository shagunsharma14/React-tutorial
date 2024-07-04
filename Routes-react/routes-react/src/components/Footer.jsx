import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
        <nav>
              <Link to='/contact'><li>Contact</li></Link>
              <Link to='/terms'><li>Terms & Conditions</li></Link>
              <Link to='/social'><li>Social</li></Link>
        </nav>
    </footer>
  )
}

export default Footer