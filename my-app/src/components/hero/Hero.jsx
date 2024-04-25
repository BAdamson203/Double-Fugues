import React from 'react'
import './Hero.css'
import gecko from '../../assets/whoafreezeframe.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Double Fugue</h1>
            <p>A place to connect with other Wheaties about your favorite hobbies</p>
            <button className='btn'>Log in <img src={gecko} alt=""/></button>
        </div>
    </div>
  )
}

export default Hero