import {useState,useEffect } from 'react'
import './index.css'
import { About,Skills,Hero,Navbar, Projects,Contact,Projects2 } from './components'


function App() {



  return (
    <div id='app' className="App font-poppins carousel carousel-vertical h-screen text-white touch-pan-y fixed left-0 right-0 bg-base-100">
       
      <Hero />
      <Navbar/>
      <About />
      <Skills />
      <Projects2/>
      <Contact/>
    </div>
  )
}

export default App
