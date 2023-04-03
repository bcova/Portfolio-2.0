import React from 'react';
import selfieCut from '../assets/selfiecut.png'




const Hero = () => {


  return (

<div className="hero h-screen w-full bg-base-100 carousel-item touch-pan-down snap-end z-40" >

  <div className="hero-content flex-col lg:flex-row-reverse overflow-clip relative h-full">
     <div className=' relative isolate overflow-hidden flex-shrink-0 rounded-lg outline outline-secondary outline-2 outline-offset-8 bottom-10'>
        <div className='selfie_bg w-[9000px] h-full absolute flex-shrink-0' ></div>
              <img src={selfieCut} className="max-w-xs sm:max-w-sm rounded-lg relative drop-shadow-[0_9px_9px_rgba(0,0,0,0.8)] scale-[1.1]" />
     </div>
    <div className='text-center about'>
      <h1 className="text-5xl font-bold tracking-wide">Hi there, I'm Brandon.</h1>
      <p className="py-6 tracking-wide">I specialize in Front-End Web Development. I spend my days
              coding in React, refining my UI/UX skills, and loving the process
              as much as the outcome.</p>
      <a href='#about'>
        {/* <button  className="btn btn-primary text-white shadow-md">Get Started</button> */}
      </a>     
    </div>
  </div>
  <div  className="relative top-[350px]">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ngbe887x.json"  background="transparent"  speed="1"  style={{width: 'max-content', height: 'max-content'}}  loop  autoplay></lottie-player>
  </div>
</div>

  )
}

export default Hero