import React from 'react'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import react from '../assets/react.svg'
import js from '../assets/js.svg'
import vue from '../assets/vue.svg'
import node from '../assets/node.svg'
import ts from '../assets/TS.svg'


const Skills = () => {
  return (
    <div id='skills' className="carousel-item  h-screen text-white justify-center items-center select-none overflow-hidden snap-end">
      <fieldset className="border-2 border-secondary rounded-lg shadow-lg bg-zinc-900 bg-opacity-50 w-80 sm:w-96">
      <legend className="text-5xl ml-6 px-2 text-primary tracking-wide rounded-md outline outline-2 bg-base-100 ">Skills</legend>
      <div className="max-w-sm max-h-[600px] sm:max-w-6xl rounded-lg overflow-scroll  touch-pan-y ">
        <div className="p-3 grid grid-rows-auto grid-cols-2 items-center justify-center h-full gap-6">
            <div className="text-center tracking-wide"><img className='w-20 mb-2 mx-auto' src={html}/>HTML</div>
            <div className="text-center tracking-wide"><img className='w-20 mb-2 mx-auto' src={css}/>Css</div>
            <div className=" tracking-wide flex flex-col items-center relative sm:top-1 top-[2px]"><img className='w-24  sm:mb-4 mb-2 mx-auto' src={js}/>Javascript</div>
            <div className="text-center tracking-wide"><img className='w-20 mx-auto' src={react}/>React</div>
            <div className="text-center tracking-wide "><img className='w-20  mx-auto ' src={vue}/>Vue</div>
            <div className="text-center tracking-wide"><img className='w-20  mx-auto' src={node}/>Node</div>
            <div className="text-center tracking-wide"><img className='w-20  mx-auto' src={ts}/>TypeScript</div>
        </div>
      </div>
      </fieldset>
    </div>
  )
}

export default Skills