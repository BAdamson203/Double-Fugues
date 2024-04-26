import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import testImg from '../../assets/image.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={testImg} alt="" className='logo'/>
        <ul>
            <li>
                <Link to="hero" smooth={true} offset={0} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} offset={-350} duration={500}>
                    About us
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} offset={-350} duration={500}>
                    Contact us
                </Link>
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