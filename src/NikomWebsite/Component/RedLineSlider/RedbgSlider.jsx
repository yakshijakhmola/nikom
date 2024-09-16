import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RedLineSlider = () => {
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
    },
    {
      id: 5,
      News_name: 'Nikom Infrasolutions Pvt Ltd has been honored with the award for “Operational Excellence - Data Center Design and Build” for Excellence in the Datacenter Ecosystem at the ASSOCHAM India “Smart Datacenters & Cloud Infrastructure Summit 2024.”',
    }
  ];

  return (
    <div className="bg-darkred py-2">
      <div className='animate-marquee flex gap-x-4'>
        {NewsUpdated.map((val) => (
          <div key={val.id} className="">
            <div className="flex items-center pl-4 gap-x-4">
              <img src="./img/brand.svg" className="w-5 invert" alt="Brand Logo" />
              <p className="parasize text-white text-sm text-nowrap">{val.News_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedLineSlider;
