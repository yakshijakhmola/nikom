import React from 'react';
import { FiChevronsRight } from "react-icons/fi";
const ServiceCard = () => {
  const ServiceCardData =[
    {
      id: 1,
      serice_icon: "./img/service/data-center.svg",
      service_name: "Data Center Consultancy",
      service_para: "We are an infrastructure solutions provider specializing in highly available, scalable, redundant.",
      service_link: "",
      service_btn: "Read More"
    },
    {
      id: 2,
      serice_icon: "./img/service/security.svg",
      service_name: "Defence And Homeland Securities",
      service_para: "Defence and Homeland Security is a focus and niche area at Nikom for Consulting and deployment",
      service_link: "",
      service_btn: "Read More"
    },
    {
      id: 3,
      serice_icon: "./img/service/engineering.svg",
      service_name: "Data Center Design And Engineering",
      service_para: "We are a full-fledged data center consulting, engineering, and designing experts specializing",
      service_link: "",
      service_btn: "Read More"
    },
    {
      id: 4,
      serice_icon: "./img/service/project-managment.svg",
      service_name: "Data Center Project Management",
      service_para: "Over many years we have developed a proven project process to plan, design, & build data",
      service_link: "",
      service_btn: "Read More"
    },
    {
      id: 5,
      serice_icon: "./img/service/data-construction.svg",
      service_name: "Data Center Construction",
      service_para: "We are an infrastructure solutions provider specializing in highly available, scalable, redundant",
      service_link: "",
      service_btn: "Read More"
    },
    {
      id: 6,
      serice_icon: "./img/service/control.svg",
      service_name: "Data Center Monitoring And Control",
      service_para: "Data Center monitoring and control is a critical element of maintaining maximum availability for your",
      service_link: "",
      service_btn: "Read More"
    },
    {
      id: 7,
      serice_icon: "./img/service/maintenance.svg",
      service_name: "Data Center Operations And Maintenance",
      service_para: "All data center designs are judged by their ability to provide continuou",
      service_link: "",
      service_btn: "Read More"
    },
    {
      id: 8,
      serice_icon: "./img/service/technology.svg",
      service_name: "IT & Networking Solutions",
      service_para: "Nikom is a leading supplier and integrator of data centre, networking, enterprise secure",
      service_link: "",
      service_btn: "Read More"
    }
  ]
  return (
    <>
      <div className='section'>
        <div className='grid xl:grid-cols-4 grid-cols-1'>
          {ServiceCardData.map((val,ind)=>{
            return(
              <div key={ind} className='bg-white shadow-dark-shadow py-8 px-5' data-aos="fade-right" data-aos-delay={(ind + 1) * 100}>
                <div className='w-16 h-16 rounded-full p-3 mb-4 bg-gradient-red invert-1'>
                  <img src={val.serice_icon} alt=""  className='invert'/>
                </div>
                <h5 className='h5'>{val.service_name}</h5>
                <p className='my-3'>{val.service_para}</p>
                <a href={val.service_link} className='redbtn'>{val.service_btn} <span className='text-2xl'><FiChevronsRight /></span></a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ServiceCard