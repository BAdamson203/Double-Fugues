import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Title from './components/title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subtitle='About Double Fugue' title='Connecting Wheaties through Their Hobbies'/>
      <About/>
      <Title subtitle='Contact us' title='Let us know what you think!'/>
    </div>
  )
}

export default App