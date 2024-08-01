import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const IntelligentTransportManagement = () => {
    const InfoList = [
        'Automatic Fare Collection',
        'Bus Fare Collection System',
        'Traffic Management system',
        'Fleet Management system',
        'One-Stop Telematics Solution Provider',
        'Expressway Traffic Management System',
        'Integrated Land Transport Operation Centre',
        'Intelligent Transport Systems',
        'LED Traffic Signal Lights',
        'Maintenance Management System (MMS)',
        'Passenger Information Display System (PIDS)',
        'Platform Screen Door (PSD)',
        'Road Systems',
        'Smart Travel Information System',
        'Traffic Information Management System',
        'Transportation',
        'In-tunnel Wireless Communication Solutions',
        'Rail Systems'
    ]
    const ServicePara = [
      "Intelligent transportation systems (ITS) are advanced applications which, without embodying intelligence as such, aim to provide innovative services relating to different modes of transport and traffic management and enable various users to be better informed and make safer, more coordinated, and 'smarter' use of transport networks."
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Intelligent Transport Management'} pagelink={'intelligent-transport-management'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataTransportManagement}
      ServiceHead={'Intelligent Transport Management'}
      ServicePara={ServicePara} 
      ServiceInfo={'Intelligent Transport Management & Telematics'}
      ServiceInfoList={InfoList} ShowInfoList={true}/>
    </>
  )
}

export default IntelligentTransportManagement