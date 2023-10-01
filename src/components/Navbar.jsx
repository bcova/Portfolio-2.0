import React from 'react'
import selfieCut from '../assets/selfiecut-PS.png'
import '@lottiefiles/lottie-player';


const Navbar = () => {


  return (
<div className="navbar bg-base-200 fixed top-0 z-10 shadow-sm border-b-2 border-b-secondary">
  <div className="navbar-start">
     <div className=' relative isolate overflow-hidden flex-shrink-0 rounded-lg outline outline-secondary outline-2 w-10 h-10 sm:w-16 sm:h-16 top-1 left-1'>
        <div className='selfie_bg_nav w-[9000px] h-full absolute flex-shrink-0' ></div>
              <img src={selfieCut} className="rounded-lg relative scale-150" />
     </div>
    <div className="dropdown relative left-6">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border-2 border-primary">
      <li className='group/about'><a href='#about' className='group-hover/about:outline-2 group-hover/about:outline-secondary outline-offset-4'><p className='group-hover/about:translate-x-3 duration-200'>About</p></a></li>
      <li className='group/skills'><a  href='#skills' className='group-hover/skills:outline-2 group-hover/skills:outline-secondary outline-offset-4'><p className='group-hover/skills:translate-x-3 duration-200'>Skills</p></a></li>
      <li className='group/projects'><a href='#projects' className='group-hover/projects:outline-2 group-hover/projects:outline-secondary outline-offset-4'><p className='group-hover/projects:translate-x-3 duration-200'>Projects</p></a></li>
      <li className='group/contact'><a href='#contact' className='group-hover/contact:outline-2 group-hover/contact:outline-secondary outline-offset-4'><p className='group-hover/contact:translate-x-3 duration-200'>Contact</p></a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4 group">
      <li className='group/about'><a href='#about' className='group-hover/about:outline-2 group-hover/about:outline-secondary outline-offset-4 group-hover/about:translate-y-2'>About</a></li>
      <li className='group/skills'><a href='#skills' className='group-hover/skills:outline-2 group-hover/skills:outline-secondary outline-offset-4 group-hover/skills:translate-y-2'>Skills</a></li>
      <li className='group/projects'><a  href='#projects' className='group-hover/projects:outline-2 group-hover/projects:outline-secondary outline-offset-4 group-hover/projects:translate-y-2'>Projects</a></li>
      <li className='group/contact'><a href='#contact'  className='group-hover/contact:outline-2 group-hover/contact:outline-secondary outline-offset-4 group-hover/contact:translate-y-2'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://docs.google.com/document/d/1IP_cM-MVuT-8KUx91ZAcNedn5Rwliog_/edit?usp=sharing&ouid=117350159220233205710&rtpof=true&sd=true' className="btn btn-primary text-white flex flex-row overflow-hidden p-2 ">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
        </script>
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_7iqfdthd.json" 
            background="transparent" 
            speed="1"  
            style={{width: '30px',transform:'scale(1.6)',}}
            loop  
            autoplay>
        </lottie-player>Resume
    </a>
  </div>
</div>
  )
}

export default Navbar