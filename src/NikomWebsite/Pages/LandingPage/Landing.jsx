import React from 'react'
import Home from '../Home'
import RedbgSlider from '../../Component/RedLineSlider/RedbgSlider'
import ServiceCard from '../../Component/Service/ServiceCard'
import AboutDesign from '../../Component/About/AboutDesign'
import ClientDesign from '../../Component/Client/ClientDesign'
import BlogCard from '../../Component/Blog/BlogCard'
import Testimonials from '../../Component/Testimonials'
const Landing = () => {
  return (
    <>
      <Home/>
      <RedbgSlider/>
      <ServiceCard/>
      <AboutDesign Showbtn={true}/>
      <ClientDesign/>
      <BlogCard/>
      <Testimonials/>
    </>
  )
}

export default Landing