import React from 'react'
import prof from "../assets/Profile.jpg"
import { TypeAnimation } from 'react-type-animation'
function Landing() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        <div className=' col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] flex justify-center'>           
                <img className='md:h-[300px]' src={prof} alt="hero Image" />
            
        </div>
        <div className='col-span-2 px-5 my-auto'>
                <h1  className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>
                        Im a 

                    </span> <br/>
                    <TypeAnimation
                        sequence={[
                            "FullStack Developer",1000,"Web Designer",1000,"Web Development",100 ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                    />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My Name is Sayyid and I have 8 Months of Experience in Web Development
                </p>
                <div className='my-8'>
                    <a className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white' href="">Download CV</a>
                    <a className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500  text-white' href="">Download CV</a>
                </div>
        </div>
    </div>
  )
}

export default Landing