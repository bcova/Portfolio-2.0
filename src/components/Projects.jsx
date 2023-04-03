import React from 'react'
import todo from '../assets/todo.jpg'
import login from '../assets/login.png'
import weatherApp from '../assets/weatherApp.png'
import tictac from '../assets/tictac.png'


const Projects = () => {
  return (
    <div id='projects' className="carousel-item h-screen text-white justify-center items-center  px-6 select-none  snap-end-">
      <fieldset className="border-2 border-secondary rounded-lg shadow-lg bg-zinc-900 bg-opacity-50 sm:p-10 p-5">
      <legend className="text-5xl  px-2 py-2 text-primary tracking-wide rounded-md outline outline-2 bg-base-100 isolate ">Projects</legend>
      <div className="h-96 sm:w-[1000px] w-80 sm:max-w-3xl carousel rounded-lg carousel-vertical  touch-pan-y ">

  <div className="carousel-item h-full overflow-clip relative isolate">
    <img className='sm:scale-150 scale-[2] scale-x-[5] relative sm:top-16 top-20 overflow-clip' src={todo} />
    <div className='absolute  bottom-3 right-3'>
    <a href='https://github.com/bcova/Todo '>
        <button className="btn bg-primary btn-outline hover:bg-secondary hover:-translate-y-1 shadow-md mr-7">Code</button>
    </a>
    <a href='https://friendly-cat-608edd.netlify.app/'>
        <button className=" btn bg-primary btn-outline hover:bg-secondary hover:-translate-y-1 shadow-md">Site</button>
    </a>    
    </div>
  </div>

  <div className="divider bg-primary"></div> 

  <div className="carousel-item h-full sm:w-[1000px]  relative isolate overflow-clip">
    <img className='relative sm:right-16 sm:scale-150  scale-[1.3] scale-x-[3.5] overflow-clip' src={weatherApp} />
    <div className='absolute  bottom-3 right-3'>
    <a href='https://github.com/bcova/WeatherApp'>
        <button className="btn bg-primary btn-outline hover:bg-secondary hover:-translate-y-1 shadow-md mr-7">Code</button>
    </a>
    <a href='https://stunning-dodol-b72247.netlify.app/'>
        <button className=" btn bg-primary btn-outline hover:bg-secondary hover:-translate-y-1 shadow-md">Site</button>
    </a>  
    </div>
  </div>

  <div className="divider bg-primary"></div> 
  <div className="carousel-item h-full overflow-clip relative isolate">
    <img className='sm:scale-150 scale-x-150 relative sm:left-32' src={tictac} />
    <div className='absolute bottom-3 right-3'>
    <a href='https://github.com/bcova/Tic-Tac-Toe'>
        <button className="btn bg-primary btn-outline hover:bg-secondary hover:-translate-y-1 shadow-md mr-7">Code</button>
    </a>
    <a href='https://frabjous-bavarois-909bfa.netlify.app/'>
        <button className=" btn bg-primary btn-outline hover:bg-secondary hover:-translate-y-1 shadow-md">Site</button>
    </a>  
    </div>
  </div> 
  <div className="divider bg-primary"></div> 
  <div className="carousel-item h-full relative isolate overflow-clip touch-pan-up">
    <img className='scale-125 scale-x-[3] sm:scale-100' src={login} />
    <div className='absolute bottom-3 right-3'>
    <a href='https://github.com/bcova/login'>
        <button className="btn bg-primary btn-outline hover:bg-secondary hover:-translate-y-1 shadow-md mr-7">Code</button>
    </a>
    <a href='https://chimerical-faloodeh-2dc686.netlify.app/'>
        <button className=" btn bg-primary btn-outline hover:bg-secondary hover:-translate-y-1 shadow-md">Site</button>
    </a>
    </div>
  </div> 
 
</div>
      </fieldset>
    </div>
  )
}

export default Projects