import React from 'react';
import { RiArrowRightDoubleLine } from "react-icons/ri";
const ServiceSideBar = () => {
    const ServiceLeftsideData = [
        {
            id: 1,
            Service_name: "Data Center Consultancy",
            Service_link: "/data-center-consultancy"
        },
        {
            id: 2,
            Service_name: "Data Center Design And Engineering",
            Service_link: "/data-center-design-and-engineering"
        },
        {
            id: 3,
            Service_name: "Data Center Project Management",
            Service_link: "/data-center-project-management"
        },
        {
            id: 4,
            Service_name: "Data Center Construction",
            Service_link: "/data-center-construction"
        },
        {
            id: 5,
            Service_name: "Data Center Monitoring And Control",
            Service_link: "/data-center-monitoring-and-control"
        },
        {
            id: 6,
            Service_name: "Data Center Operations And Maintenance",
            Service_link: "/data-center-operations-and-maintenance"
        },
        {
            id: 7,
            Service_name: "Energy Management Solutions",
            Service_link: "/energy-management-solutions"
        },
        {
            id: 8,
            Service_name: "Asset Tracking Service",
            Service_link: "/asset-tracking-service"
        },
        {
            id: 9,
            Service_name: "Defence And Homeland Securities",
            Service_link: "/defence-and-homeland-security"
        },
        {
            id: 10,
            Service_name: "Information Technology",
            Service_link: "/information-technology"
        },
        {
            id: 11,
            Service_name: "Audio Visuals / Smart Rooms Solutions",
            Service_link: "/audio-visuals-and-smart-rooms-solutions"
        },
        {
            id: 12,
            Service_name: "E-government",
            Service_link: "/electronic-government"
        },
        {
            id: 13,
            Service_name: "Intelligent Transport Management",
            Service_link: "/intelligent-transport-management"
        }
    ]
  return (
    <>
    <div className='rounded-tl-2xl rounded-tr-2xl rounded-bl-lg rounded-br-lg border border-solid shadow-dark-shadow border-darkred overflow-hidden'>
        <h4 className='bg-darkred text-center text-white py-4 rounded-tl-2xl rounded-tr-2xl'>All Services</h4> 
        <div className='my-5 px-5'>
            {ServiceLeftsideData.map((val,ind)=>{
                return(
                    <a key={ind} href={val.Service_link} className='servicerightsidebarbox'><p className='text-[14px]'>{val.Service_name}</p> <RiArrowRightDoubleLine /> </a>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default ServiceSideBar