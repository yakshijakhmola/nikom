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
      News_name: 'News - Aurionpro Continues High Growth Trajectory with Strong Q3 FY24 Results: Revenue grows 37% YoY1',
    },
    {
      id: 2,
      News_name: 'News - Aurionpro Continues High Growth Trajectory with Strong Q3 FY24 Results: Revenue grows 37% YoY2',
    },
    {
      id: 3,
      News_name: 'News - Aurionpro Continues High Growth Trajectory with Strong Q3 FY24 Results: Revenue grows 37% YoY3',
    },
    {
      id: 4,
      News_name: 'News - Aurionpro Continues High Growth Trajectory with Strong Q3 FY24 Results: Revenue grows 37% YoY4',
    },
    {
      id: 5,
      News_name: 'News - Aurionpro Continues High Growth Trajectory with Strong Q3 FY24 Results: Revenue grows 37% YoY5',
    },
    {
      id: 6,
      News_name: 'News - Aurionpro Continues High Growth Trajectory with Strong Q3 FY24 Results: Revenue grows 37% YoY6',
    },
    {
      id: 7,
      News_name: 'News - Aurionpro Continues High Growth Trajectory with Strong Q3 FY24 Results: Revenue grows 37% YoY7',
    },
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
