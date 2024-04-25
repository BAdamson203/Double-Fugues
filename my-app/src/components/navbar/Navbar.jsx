import React, { useEffect, useState } from 'react'
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