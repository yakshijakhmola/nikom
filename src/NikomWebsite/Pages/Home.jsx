import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const navigate = useNavigate();
  return (
    <>
      <Slider {...settings}>
        <div className="banner xl:h-screen h-[500px]">
          <div className='container'>
            <div className='absolute xl:top-44 top-3 xl:left-32 left-3 xl:w-[50%] w-full xl:py-0 py-2  xl:px-0 px-4'>
              <h1 className='text-white text-bold font-bold-font leading-[1.625] mb-4 font-extrabold' data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000">Delivering Expertise Across Design, Build, and Operations for Future-Ready Data Centers.</h1>
              <p className='text-slate-50 mb-4'>From design and construction to seamless operations, we deliver expertise across the entire data center lifecycle. Our solutions are built to be scalable, sustainable, and future-ready, ensuring your data center infrastructure meets today's demands while preparing you for tomorrow's challenges.</p>
              <a onClick={()=>navigate('/contact')} className='dark-btn bg-darkred'>Contact Us<FaArrowRight className='circle'/> </a>
            </div>
          </div>
        </div>
        <div className="banner xl:h-screen h-[500px]">
          <div className='container'>
            <div className='absolute xl:top-44 top-3 xl:left-32 left-3 xl:w-[50%] w-full xl:py-0 py-2  xl:px-0 px-4'>
              <h1 className='text-white text-bold font-bold-font leading-[1.625] mb-4 font-extrabold' data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000">Delivering Expertise Across Design, Build, and Operations for Future-Ready Data Centers.</h1>
              <p className='text-slate-50 mb-4'>From design and construction to seamless operations, we deliver expertise across the entire data center lifecycle. Our solutions are built to be scalable, sustainable, and future-ready, ensuring your data center infrastructure meets today's demands while preparing you for tomorrow's challenges.</p>
              <a onClick={()=>navigate('/contact')} className='dark-btn bg-darkred'>Contact Us<FaArrowRight className='circle'/> </a>
            </div>
          </div>
        </div>
        <div className="banner xl:h-screen h-[500px]">
          <div className='container'>
            <div className='absolute xl:top-44 top-3 xl:left-32 left-3 xl:w-[50%] w-full xl:py-0 py-2  xl:px-0 px-4'>
              <h1 className='text-white text-bold font-bold-font leading-[1.625] mb-4 font-extrabold' data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000">Delivering Expertise Across Design, Build, and Operations for Future-Ready Data Centers.</h1>
              <p className='text-slate-50 mb-4'>From design and construction to seamless operations, we deliver expertise across the entire data center lifecycle. Our solutions are built to be scalable, sustainable, and future-ready, ensuring your data center infrastructure meets today's demands while preparing you for tomorrow's challenges.</p>
              <a onClick={()=>navigate('/contact')} className='dark-btn bg-darkred'>Contact Us<FaArrowRight className='circle'/> </a>
            </div>
          </div>
        </div>
      </Slider>
    </>
  )
}

export default Home