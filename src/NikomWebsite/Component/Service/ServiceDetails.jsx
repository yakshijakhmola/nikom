import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { RiCheckDoubleLine } from "react-icons/ri";
import NavbarDesign from '../Navbar/NavbarDesign';
import FooterDesign from '../Footer/FooterDesign';
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign';

const ServiceDetails = () => {
    const ServiceLeftsideData = [
        {
            id: 1,
            Service_name: "Data Center Consultancy",
            Service_link: ""
        },
        {
            id: 2,
            Service_name: "Defence and Homeland Security",
            Service_link: ""
        },
        {
            id: 3,
            Service_name: "IT & Networking Solutions",
            Service_link: ""
        },
        {
            id: 4,
            Service_name: "Data Center Design & Engineering",
            Service_link: ""
        },
        {
            id: 5,
            Service_name: "Data Center Project Management",
            Service_link: ""
        },
        {
            id: 6,
            Service_name: "Data Center Monitoring & Control",
            Service_link: ""
        },
        {
            id: 7,
            Service_name: "Data Center Operations & Maintenance",
            Service_link: ""
        },
        {
            id: 8,
            Service_name: "Energy Management Solutions",
            Service_link: ""
        },
        {
            id: 9,
            Service_name: "Asset Tracking Service",
            Service_link: ""
        },
        {
            id: 10,
            Service_name: "Audio Visuals / Smart Rooms Solutions",
            Service_link: ""
        }
    ]
  return (
    <div>
        <BreadcrumbDesign pagelink={'Service Details'} pagename={'Service Details'}/>
        <div className='section'>
            <div className='container'>
                <div className='w-full grid grid-cols-12 gap-x-5'>
                    <div className='w-full col-span-7'>
                        <div>
                            <img src='./img/service/data-center-consultancy.jpg' className='rounded-tl-md rounded-tr-md'/>  
                        </div>
                        <div className='bg-white shadow-dark-shadow py-5 px-5 rounded-bl-md rounded-br-md'>
                            <div className='mb-3'>
                                <h2 className='mb-3'>Data Center Consultancy</h2>
                                <p>Our Data Center Consulting Services has enterprise-wide, comprehensive approach to safeguard the company's mission critical environments. The services go through the entire lifecycle, from assessment, strategy and design, to implementation and operational services. We have the experience, expertise, proven methodologies and tools to help you manage your data center investments, improve operations and performance, and deliver excellent business results.</p>
                            </div>
                            <div className='mb-3'>
                                <div>
                                    <h5 className='mb-3'>Information Technology</h5>
                                    <ul>
                                        <li className='flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Business Continuity & Disaster Recovery</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Disaster Recovery Assessment Services</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Virtualization Strategies & Assessment</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Optimization Evaluations</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Relocation Evaluation & Planning</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Consolidation Evaluation & Planning</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>IT Technology Roadmap Planning</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Routing and Switching Planning & Feasibility</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Server Planning & Feasibility</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Storage Area Network (SAN) and Data Protection Planning & Feasibility</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className=''>
                                <h5 className='mb-3'>Facility</h5>
                                <div className=''>
                                    <ul className='grid xl:grid-cols-2 grid-cols-1 gap-x-5'>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Planning & Pre-Design</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Power & Cooling Systems Analysis</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Availability & Risk Assessment</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Feasibility Studies & Project Cost Budgeting</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center CFD Services</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Technology Master Format Planning</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Site Selection</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Real Estate</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Relocation Evaluation & Planning</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Business Continuity & Disaster Recovery</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Thermography Assessment Service</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Energy Usage Assessment Service</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Energy Efficiency Assessment Service</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Facility Business Strategy Consulting</p></li>
                                        <li className='my-2 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Data Center Renovation</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full col-span-5 xl:mt-0 md:mt-0 mt-5'>
                        <div className='py-10 px-5 rounded-md bg-light-white'>
                            <h4 className='text-black'>All Services</h4> 
                            <div className='mt-5'>
                                    {ServiceLeftsideData.map((val,ind)=>{
                                        return(
                                            <a key={ind} href={val.Service_link} className='servicerightsidebarbox'><p>{val.Service_name}</p> <FaArrowRight/> </a>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceDetails