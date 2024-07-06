import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientDesignJson from './ClientDesignJson'
const ClientDesign = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        Arrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            },
          },
        ],
    };
  return (
    <>
      <div className='-mt-10'>
        <div className='container'>
          <Slider {...settings} className='bg-black py-5'>
            {ClientDesignJson.map((val,ind)=>{
              return(
                <div key={ind}>
                  <img src={val.client_image} className='w-32 grayscale-0'/>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default ClientDesign