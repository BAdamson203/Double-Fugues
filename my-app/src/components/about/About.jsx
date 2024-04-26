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
            <h2>Finding new friends based on your interests</h2>
            <p>Double Fugue is an application created by Wheaton students to help
              serve the Wheaton College campus community by connecting students
              through common interests.</p>
            <p>Our goal is to bring students across Wheaton College closer together
              to do more of the weird things that they love with others who love to
              do the same.</p>
            <p>If you've been having trouble finding a fugue partner or really, 
              really want to routinely cook recipes generated with ChatGPT with
              other students, or something like that, Double Fugue might just
              be the service for you!</p>
        </div>
    </div>
  )
}

export default About