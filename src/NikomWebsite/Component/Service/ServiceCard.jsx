import React from 'react';
import { FiChevronsRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { assets } from '../../../assets/assets';
const ServiceCard = () => {
  const navigate = useNavigate();
  const ServiceCardData =[
    {
      id: 1,
      serice_icon: [assets.DataConsultancyIcon],
      service_name: "Data Center Consultancy",
      service_para: "Our Data Center Consulting Services has enterprise-wide, comprehensive approach to...",
      service_link: "/data-center-consultancy",
      service_btn: "Read More"
    },
    {
      id: 2,
      serice_icon: [assets.DataCenterEngineerIcon],
      service_name: "Data Center Design And Engineering",
      service_para: "We are full-fledged data center consulting, engineering, & designing experts...",
      service_link: "/data-center-design-and-engineering",
      service_btn: "Read More"
    },
    {
      id: 3,
      serice_icon: [assets.DataCenterProjectIcon],
      service_name: "Data Center Project Management",
      service_para: "Over many years we have developed a proven project process to plan, design, and build...",
      service_link: "/data-center-project-management",
      service_btn: "Read More"
    },
    {
      id: 4,
      serice_icon: [assets.DataCenterConstructionIcon],
      service_name: "Data Center Construction",
      service_para: "We are infrastructure solutions provider specializing in highly available, scalable, redundant...",
      service_link: "/data-center-construction",
      service_btn: "Read More"
    },
    {
      id: 5,
      serice_icon: [assets.DataCenterControlIcon],
      service_name: "Data Center Monitoring And Control",
      service_para: "Data Center monitoring and control is a critical element of maintaining maximum availability for...",
      service_link: "/data-center-monitoring-and-control",
      service_btn: "Read More"
    },
    {
      id: 6,
      serice_icon: [assets.DataCenterEngineerMaintenanceIcon],
      service_name: "Data Center Operations And Maintenance",
      service_para: "All data center designs are judged by their ability to provide continuous operations for...",
      service_link: "/data-center-operations-and-maintenance",
      service_btn: "Read More"
    },
    {
      id: 7,
      serice_icon: [assets.ManagementSolutionsIcon],
      service_name: "Energy Management Solutions",
      service_para: "As your IT infrastructure adds more IT assets, it is hard to manually add new ones and...",
      service_link: "/energy-management-solutions",
      service_btn: "Read More"
    },
    {
      id: 8,
      serice_icon: [assets.AssetsTrackingIcon],
      service_name: "Asset Tracking Service",
      service_para: "Nikom is a leading supplier and integrator of data centre, networking, enterprise secure...",
      service_link: "/asset-tracking-service",
      service_btn: "Read More"
    },
    {
      id: 9,
      serice_icon: [assets.DefenceHomelandIcon],
      service_name: "Defence And Homeland Securities",
      service_para: "Defence and Homeland security is a focus and niche area at Nikom for Consulting...",
      service_link: "/defence-and-homeland-security",
      service_btn: "Read More"
    },
    {
      id: 10,
      serice_icon: [assets.ITNetworkSolutions],
      service_name: "Information Technology",
      service_para: "Nikom is a leading supplier and integrator of data centre, networking...",
      service_link: "/information-technology",
      service_btn: "Read More"
    },
    {
      id: 11,
      serice_icon: [assets.AudioVisualIcon],
      service_name: "Audio Visuals / Smart Rooms Solutions",
      service_para: "Our objective is to help customers achieve the Perfect Meeting, thereby...",
      service_link: "/audio-visuals-and-smart-rooms-solutions",
      service_btn: "Read More"
    },
    {
      id: 12,
      serice_icon: [assets.ElectricGovernmentIcon],
      service_name: "E-government",
      service_para: "Electronic government (or e-government) essentially refers to...",
      service_link: "/electronic-government",
      service_btn: "Read More"
    },
    {
      id: 13,
      serice_icon: [assets.TransportManagementIcon],
      service_name: "Intelligent Transport Management",
      service_para: "Intelligent transportation systems (ITS) are advanced applications which...",
      service_link: "/intelligent-transport-management",
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