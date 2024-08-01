import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const EnergyManagementSolutions = () => {
    const ServicePara = [
        'We provide our clients with a one-stop energy management solution to all of their energy conservation needs. Our goal is to reduce the overall energy consumption of your business up to 40%, perhaps more.',
        'There are various ways to improve energy efficiency and reduce energy costs for your business. Energy Management Solutions works with your organization to identify inefficient energy consumption. We get to know your company, create customized solutions, develop cost-saving strategies unique to your operations, and ultimately implement those strategies.',
        'We have developed and maintained several working relationships within our ever-evolving industry. This allows us to offer our clients the latest energy efficient technologies to reduce consumption. Nikom will continue leading the way in the energy conservation field simply by understanding our clients needs, and exceeding their expectations.',
        "Energy Management System (EMS) is a complete hardware, software, and services solution that delivers the granular visibility, actionable analysis, and intelligent control capabilities to manage your facility’s energy endpoints, from HVAC and lighting, to refrigerators and more. With the Nikom EMS, information captured about energy and facility environmental conditions provides the insights and recommendations to fine-tune your sites to optimize energy efficiency and site operations."
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Energy Management Solutions'} pagelink={'energy-management-solutions'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataManagement}
      ServiceHead={'Energy Management Solutions'}
      ServicePara={ServicePara}/>
    </>
  )
}

export default EnergyManagementSolutions