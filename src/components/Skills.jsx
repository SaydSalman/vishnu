import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/js.png"
import bootstrap from "../assets/bootstrap.png"
import reactjs from "../assets/reactjs.png"
import nodejs from "../assets/node.png"
import expressjs from "../assets/express.png"
import angularjs from "../assets/angular.png"
import tailwind from "../assets/tailwind.png"
import typescript from "../assets/type.png"

function Skills() {
  return (
    <div className='bg-black border border-gray-600 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4 place-items-center md:flex md:justify-between md:items-center'>
      <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
        My <br /> Tech <br /> Stack
      </h2>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={html} alt="" />
        <p>HTML</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={css} alt="" />
        <p className='mt-2'>Css</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={javascript} alt="" />
        <p>Javascript</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={reactjs} alt="" />
        <p>ReactJS</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={nodejs} alt="" />
        <p>NodeJs</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={expressjs} alt="" />
        <p>ExpressJs</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={bootstrap} alt="" />
        <p>Bootstrap</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={angularjs} alt="" />
        <p>Angular</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={tailwind} alt="" />
        <p>TailWind</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] rounded-lg'>
        <img className='rounded-lg' src={typescript} alt="" />
        <p>TypeScript</p>
      </div>
      
    </div>
  )
}

export default Skills
