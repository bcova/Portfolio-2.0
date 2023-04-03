import React,{useState, useEffect} from 'react';
import selfieCut from '../assets/selfiecut.png'





const Hero = () => {
const [loading, setLoading] = useState(true)

useEffect(() => {
// setLoading(true)
setTimeout(() => {
   setLoading(false)
}, 2000)
},[])


  return (
    
<div className="hero h-screen w-full bg-base-100 carousel-item touch-none snap-end z-40" >
{loading ? <div className='w-screen h-screen bg-base-100 flex justify-center items-center'>
<span className="loader"></span>
</div> :
  <div className="hero-content flex-col lg:flex-row-reverse overflow-clip relative h-full bottom-10">
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
        <button  className="btn btn-primary text-white shadow-md relative top-8">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_dxwu3xu0.json"  background="transparent"  speed="1"  styles="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
       </button>
      </a>     
    </div>
  </div>
}
</div>

  )
}

export default Hero