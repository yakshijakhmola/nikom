import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { assets } from '../../../assets/assets';
import CountUp from 'react-countup';

const AboutDesign = ({Extratext, Showbtn}) => {
    const navigate = useNavigate();
    const AboutData = [
        {
            id:1,
            About_number: "320",
            About_para: "Happy Clients"
        },
        {
            id:2,
            About_number: "23",
            About_para: "Years of Experience"
        },
        {
            id:3,
            About_number: "112",
            About_para: "Managing Data Centers"
        }
    ]
  return (
    <>
        <div className='bg-light-gray pt-10 pb-20 bg-[url("./img/about-bg.png")] bg-no-repeat bg-cover'>
            <div className='container'>
                <div className='grid xl:grid-cols-2 grid-cols-1'>
                    <div data-aos="fade-down" data-aos-duration="1000">
                       <div className='relative'>
                            <img className="relative xl:mb-0 md:mb-0 lg:mb-0 mb-4" src={assets.About1}/>
                            <img className="absolute -bottom-0 right-24 xl:block lg:block md:block hidden" src={assets.About2}/>
                       </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className='mt-5 xl:mt-0 lg:mt-5'>
                        <h3 className='text-white xl:text-4xl text-2xl'>Transformative Tech Solutions Provider</h3>
                        <p className='text-white-para-color text-parasize my-5'>Nikom An ISO 9001 Company and Member of IGBC (Indian Green Building Council-CII) has an integrated capability to design and build State-Of-Art World Class Datacenters, Energy Management Solutions{Extratext}</p>
                        <div className='grid grid-cols-12'>
                            {AboutData.map((val,ind)=>{
                                return(
                                    <div key={ind} className='col-span-6 xl:col-span-4 lg:col-span-4 mb-4 border-l-[6px] border-solid border-darkred pl-5'>
                                        <h3 className='text-white'><CountUp start={0} end={val.About_number} duration={5} scrollSpyOnce={false} enableScrollSpy redraw/></h3>
                                        <span className='text-white-para-color text-parasize'>{val.About_para}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <>
                            {Showbtn?  <a onClick={()=>navigate('/about')} className='dark-btn mt-5'>Read More <FaArrowRight className='circle'/></a>: ""}
                        </>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutDesign  