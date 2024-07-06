import React from 'react'
import AboutDesign from '../Component/About/AboutDesign'
import NavbarDesign from '../Component/Navbar/NavbarDesign'
import FooterDesign from '../Component/Footer/FooterDesign'
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign'
import TimelineDesign from '../Component/Timeline/TimelineDesign'
import { FiLayers } from "react-icons/fi";

const About = () => {
    const LifeCycle = [
        {
            id:1,
            LifeCycle_icon: <FiLayers/> ,
            Lifecycle_number: "262+",
            LifeCycle_para: "Designed and Built Tier/Rated Data Centers across India"
        },
        {
            id:2,
            LifeCycle_icon: <FiLayers/> ,
            Lifecycle_number: "400+",
            LifeCycle_para: "On-site Manpower (on rolls) deployed Across India"
        },
        {
            id:3,
            LifeCycle_icon: <FiLayers/> ,
            Lifecycle_number: "3+",
            LifeCycle_para: "Data Center Audits"
        },
        {
            id:4,
            LifeCycle_icon: <FiLayers/> ,
            Lifecycle_number: "24+",
            LifeCycle_para: "Designed and Built Tier/Rated Data Centers across India"
        },
        {
            id:5,
            LifeCycle_icon: <FiLayers/> ,
            Lifecycle_number: "112+",
            LifeCycle_para: "Managing Data Centers ( DC and DR ) across India "
        },
        {
            id:6,
            LifeCycle_icon: <FiLayers/> ,
            Lifecycle_number: "560+",
            LifeCycle_para: "Locations covered across India"
        }
    ]
  return (
    <>
        <BreadcrumbDesign pagelink={'About'} pagename={'About'}/>
        <div className='section'> 
            <div className='container'>
                <div className='grid grid-cols-1 xl:grid-cols-3'>
                    <div className='mt-3 xl:mt-0' data-aos="fade-right" data-aos-delay="100">
                        <div className='bg-gradient-red w-16 h-16 rounded-full p-2 block m-auto'>
                            <img src='./img/about/vision.svg' className='invert'/>
                        </div>
                        <div>
                            <h5 className='text-center my-3'>Vision</h5>
                            <p className='text-center'>To foster long-lasting and mutually meaningful partnerships with our customers and business
                            associates by always delivering a credible, ethical, and consistent solution to their business needs.</p>
                        </div>
                    </div>
                    <div className='mt-3 xl:mt-0' data-aos="fade-right" data-aos-delay="200">
                        <div className='bg-gradient-red w-16 h-16 rounded-full p-2 block m-auto'>
                        <img src='./img/about/mission.svg' className='invert'/>
                        </div>
                        <div>
                            <h5 className='text-center my-3'>Mission</h5>
                            <p className='text-center'>To foster long-lasting and mutually meaningful partnerships with our customers and business
                            associates by always delivering a credible, ethical, and consistent solution to their business needs.</p>
                        </div>
                    </div>
                    <div className='mt-3 xl:mt-0' data-aos="fade-right" data-aos-delay="300">
                        <div className='bg-gradient-red w-16 h-16 rounded-full p-2 block m-auto'>
                            <img src='./img/about/goals.svg' className='invert'/>
                        </div>
                        <div>
                            <h5 className='text-center my-3'>Goals</h5>
                            <p className='text-center'>To foster long-lasting and mutually meaningful partnerships with our customers and business
                            associates by always delivering a credible, ethical, and consistent solution to their business needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AboutDesign Extratext={'To foster long-lasting and mutually meaningful partnerships with our customers and business associates by always delivering a credible, ethical, and consistent solution to their business needs.'} Showbtn={false}/>
        <div className='section'>
            <div className='container'>
                <div className='flex items-center justify-center flex-col'>
                    <p className='smallspan'>Delivering Complete</p>
                    <h2 className='centerheading'>Datacenter Life Cycle Management Services</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5'>
                    {LifeCycle.map((val, ind)=>{
                        return(
                            <div className='flex items-start gap-x-10 bg-white shadow-dark-shadow p-10 rounded-md' key={ind} data-aos="fade-up" data-aos-delay={(ind + 1) * 100}>
                                <div className='text-6xl text-darkred hover:text-black scale-x-100 hover:-scale-x-100 ease-linear transition-all duration-300'>
                                    {val.LifeCycle_icon}
                                </div>
                                <div>
                                    <h2>{val.Lifecycle_number}</h2>
                                    <p>{val.LifeCycle_para}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <TimelineDesign/>
    </>
  )
}

export default About 