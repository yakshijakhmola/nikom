import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RedLineSlider = () => {
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false, 
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, 
          variableWidth: true,
        },
      },
    ],
  };

  const NewsUpdated = [
    {
      id: 1,
      News_name: 'Dr VK Garg , Chairman Nikom received the National Award " Vayoshrestha " from Honorable President of India for philanthropic award.',
    },
    {
      id: 2,
      News_name: 'Awarded as one of the " 10 Most Promising Datacentre Solution Providers " in India in 2019 and 2021',
    },
    {
      id: 3,
      News_name: 'Awarded by INDOBES for Excellence & Innovation in HPC datacenter',
    },
    {
      id: 4,
      News_name: 'Rated as SME 1 for Highest Creditworthiness by Brickworks Anlaytics',
    }
  ];

  return (
    <div className="bg-darkred py-2 h-9">
      <Slider {...settings}>
        {NewsUpdated.map((val) => (
          <div key={val.id} className="">
            <div className="flex items-center pl-4 gap-x-4">
              <img src="./img/brand.svg" className="w-5 invert" alt="Brand Logo" />
              <p className="parasize text-white text-sm">{val.News_name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RedLineSlider;
