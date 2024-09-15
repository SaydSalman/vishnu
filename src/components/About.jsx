import React from 'react'
import about from "../assets/about.jpg"
function About() {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12'>
        <div className='md:grid md:grid-cols-2 sm:py-16 container'>
            <div className='mt-4 md:mt-0 text-left flex   py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 text-red-800'>About Me</h2>
                    <p className='text-base lg:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga, nulla consectetur dicta delectus voluptate voluptatem. Quam distinctio quaerat obcaecati veniam velit pariatur, dolor natus possimus, itaque, assumenda voluptates nobis.</p>
                </div>
            </div>
            <div>
                <img className='mx-auto rounded-3xl py-8 md:py-0' src={about} height={300} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About