import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <div className="n-wrapper">
    <div className="n-left">
        <div className="n-name">TalkVision</div>
        
        <span>toggle</span>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Features</li>
                <li>Plans</li>
                <li>Contact</li>
            </ul>
        </div>
        <a href="/signin">
        <button className="button n-button">Sign In</button>
        </a>
        <a href="/register">
        <button className="button n-button">Sign Up, It's Free</button>
        </a>
      
    </div>
   </div>
  )
}

export default Navbar

