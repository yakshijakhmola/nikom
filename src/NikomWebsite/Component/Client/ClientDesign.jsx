import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from '../../../assets/assets';
const ClientDesign = () => {
  const ClientDesignJson = [
    {
        id:1,
        client_image: assets.hcltech
    },
    {
        id:2,
        client_image: assets.aircel
    },
    {
        id:3,
        client_image: assets.bses
    },
    {
        id:4,
        client_image: assets.hp
    },
    {
        id:5,
        client_image: assets.ntpc
    },
    {
        id:6,
        client_image: assets.nhpc
    },
    {
        id:7,
        client_image: assets.indianoil
    },
    {
        id:8,
        client_image: assets.coforge
    },
    {
        id:9,
        client_image: assets.tataconsultancy
    },
    {
        id:10,
        client_image: assets.bsnl
    }
]
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