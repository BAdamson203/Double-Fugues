import React from 'react'
import './Navbar.css'
import testImg from '../../assets/image.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={testImg} alt="" className='logo'/>
        <ul>
            <li>
                Home
            </li>
            <li>
                About us
            </li>
            <li>
                Contact us
            </li>
            <li>
                Sign up
            </li>
            <li>
                <button className='btn'>Log in</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar