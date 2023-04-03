import React from 'react'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import react from '../assets/react.svg'
import js from '../assets/js.svg'
import vue from '../assets/vue.svg'
import node from '../assets/node.svg'


const Skills = () => {
  return (
    <div id='skills' className="carousel-item  h-screen text-white justify-center items-center  px-6 select-none overflow-hidden snap-end">
      <fieldset className="border-2 border-secondary rounded-lg shadow-lg bg-zinc-900 bg-opacity-50">
      <legend className="text-5xl ml-6 px-2 text-primary tracking-wide rounded-md outline outline-2 bg-base-100 ">Skills</legend>
      <div className="max-w-sm max-h-[600px] sm:max-w-6xl rounded-lg overflow-scroll  touch-pan-y ">
        <div className="p-3 grid grid-rows-auto grid-cols-2 items-center justify-center h-full gap-6">
            <div className="text-center tracking-wide"><img className='w-28 mb-2' src={html}/>HTML</div>
            <div className="text-center tracking-wide"><img className='w-28 mb-2' src={css}/>Css</div>
            <div className=" tracking-wide flex flex-col items-center relative sm:top-1 top-[2px]"><img className='w-24  sm:mb-4 mb-2' src={js}/>Javascript</div>
            <div className="text-center tracking-wide"><img className='w-28' src={react}/>React</div>
            <div className="text-center tracking-wide "><img className='w-28 ' src={vue}/>Vue</div>
            <div className="text-center tracking-wide"><img className='w-28 ' src={node}/>Node</div>
        </div>
      </div>
      </fieldset>
    </div>
  )
}

export default Skills