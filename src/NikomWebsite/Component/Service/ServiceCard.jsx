import React from 'react';
import { FiChevronsRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { assets } from '../../../assets/assets';
const ServiceCard = () => {
  const navigate = useNavigate();
  const ServiceCardData =[
    {
      id: 1,
      serice_icon: [assets.ManagingData],
      service_name: "Managing Data Centre Lifecycle",
      service_para: "Our Data Center Consulting Services has enterprise-wide, comprehensive approach to...",
      service_link: "/managing-data-centre-lifecycle",
      service_btn: "Read More"
    },
    {
      id: 2,
      serice_icon: [assets.ITNetworkSolutions],
      service_name: "IT & Networking Solutions",
      service_para: "We are full-fledged data center consulting, engineering, & designing experts...",
      service_link: "/data-center-design-and-engineering",
      service_btn: "Read More"
    },
    {
      id: 3,
      serice_icon: [assets.FacilityManagement],
      service_name: "Facility Management & O&M",
      service_para: "Over many years we have developed a proven project process to plan, design, and build...",
      service_link: "/facility-management-and-oandm",
      service_btn: "Read More"
    },
    {
      id: 4,
      serice_icon: [assets.SafetyandSmartCity],
      service_name: "Safety & Smart City Solutions",
      service_para: "We are infrastructure solutions provider specializing in highly available, scalable, redundant...",
      service_link: "/safety-and-smart-city-solutions",
      service_btn: "Read More"
    },
    {
      id: 5,
      serice_icon: [assets.AudioVisualIcon],
      service_name: "AV Solutions",
      service_para: "Data Center monitoring and control is a critical element of maintaining maximum availability for...",
      service_link: "/av-solutions",
      service_btn: "Read More"
    },
    {
      id: 6,
      serice_icon: [assets.AviationDefence],
      service_name: "Aviation & Defence Solutions",
      service_para: "All data center designs are judged by their ability to provide continuous operations for...",
      service_link: "/aviation-and-defence-solutions",
      service_btn: "Read More"
    },
    {
      id: 7,
      serice_icon: [assets.DigitalTransformation],
      service_name: "Digital Transformation",
      service_para: "As your IT infrastructure adds more IT assets, it is hard to manually add new ones and...",
      service_link: "/energy-management-solutions",
      service_btn: "Read More"
    }
  ]
  return (
    <>
      <div className='pt pb'>
        <div className='grid grid-cols-12'>
          {ServiceCardData.map((val,ind)=>{
            return(
              <div key={ind} className='bg-white shadow-dark-shadow p-5 col-span-12 md:col-span-6 lg:col-span-3' data-aos="fade-right" data-aos-delay={(ind + 1) * 100}>
                <div className='w-16 h-16 rounded-full p-3 mb-4 bg-gradient-red invert-1'>
                  <img src={val.serice_icon} alt={val.service_name}  className='invert'/>
                </div>
                <h5>{val.service_name}</h5>
                <p className='my-3'>{val.service_para}</p>
                <a onClick={()=>navigate(`${val.service_link}`)} className='redbtn'>{val.service_btn} <span className='text-2xl'><FiChevronsRight /></span></a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ServiceCard