import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Home = () => {
  return (
    <>
      <div className="banner xl:h-screen h-[500px]">
        <div className='container'>
          <div className='absolute xl:top-44 top-3 xl:left-32 left-3 xl:w-[40%] w-full xl:py-0 py-2  xl:px-0 px-4'>
            <h1 className='text-white text-bold font-bold-font leading-[1.625] mb-4 font-extrabold' data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000">“Accelerating Enterprise Transformation Globally” ADAPT With Aurionpro</h1>
            <p className='text-slate-50 mb-4'>A new paradigm of Digital led converged technologies and connected experiences await your business processes. With Advanced & Accelerated Platform-led Transformation to ADAPT to a new digital era.</p>
            <a href='' className='dark-btn bg-darkred' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">Explore More <FaArrowRight className='circle'/> </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home