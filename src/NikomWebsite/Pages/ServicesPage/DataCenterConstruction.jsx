import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const DataCenterConstruction = () => {
    const InfoList = [
        'Design/Build Construction',
        'Bid & Specification Construction',
        'General Contracting',
        'Construction Management'
    ]
    const ServicePara = [
      "We are infrastructure solutions provider specializing in highly available, scalable, redundant and manageable, turnkey solutions for IT environments from utility-to-desktop. We specialize in products & services that integrate into solutions for a host of IT-centric environments including: facility-wide generator & UPS solutions, data centers, server rooms/closets, MDFs, IDFs, wiring/network closets, phone rooms, network operation centers, command bridges and general office area environment solutions that effectively route power, voice & data to workstations through trading floors.",

      "We understand the stress involved and detail required in even a minor construction project. Compound this with a 24x7 availability requirement, and the quantity and complexity of systems required in today's data centers and what you have is today's typical data center construction project.",

      'Data Center Construction - We have streamlined the data center construction process in order to minimize the interruption to day-to-day operations, while still keeping costs in check. We will guide you every step of the way, from the first realization that some scope of change is required, to the final systems commissioning and use training.',

      'Whatever avenue you select for the construction of your data center; whether the traditional design-specify-bid-build, or the more modern design/build. Or if you simply need guidance in designing and specifying your data center, we will utilize its ever expanding expertise to get you the up-to-date, state-of-the-art data center you need, and then take the data center to the desktop; providing you with the integrated, and completely manageable facility that makes your job easier, and your company more profitable.'
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Data Center Construction'} pagelink={'data-center-construction'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataConstruction}
      ServiceHead={'Data Center Construction'}
      ServicePara={ServicePara} 
      ServiceInfoList={InfoList}  ShowInfoList={true}/>
    </>
  )
}

export default DataCenterConstruction