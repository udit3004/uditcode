import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png"
const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt='' className='logo'/>
        <ul className='list-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why we</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
      
    </div>
  )
}

export default Header;
