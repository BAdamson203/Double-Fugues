import React from 'react'
import './About.css'
import gecko from '../../assets/whoafreezeframe.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={gecko} alt="" className='gecko'/>
        </div>
        <div className="about-right">
            <h3>About Double Fugue</h3>
            <h2>Connecting Wheaties via hobbies</h2>
            <p>Some text about our app</p>
            <p>Some more text about our app</p>
            <p>Even more text about our app (still in development!)</p>
        </div>
    </div>
  )
}

export default About