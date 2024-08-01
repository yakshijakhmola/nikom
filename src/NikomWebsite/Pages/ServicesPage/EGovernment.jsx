import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const EGovernment = () => {
    const InfoList = [
        'Airport Pass Control System',
        'Airport Systems',
        'Aviation',
        'Biometrics Solutions',
        'Building Automation System',
        'Business Analytics',
        'Cloud Computing',
        'Coastal Surveillance',
        'Command Centre',
        'Data Centre Design and Implementation',
        'E-Government Solutions',
        'Energy Management & Building Performance Monitoring System',
        'Fire Alarm System',
        'Fire Services Location And Management of Emergency System (FLAMES)',
        'Flight Information Display Control System',
        'Homeland Security & Mission-Critical Systems',
        'Information Assurance Solutions',
        'Integrated Building Facilities Management System',
        'Intelligent Building Solutions',
        'Intelligent, Smart & Green Buildings',
        'Managed Services',
        'Parking Guidance System',
        'People Counting System',
        'Police Resource Incident Management Executive System (PRIMES)',
        'RFID Solutions',
        'Security & Emergency Management for Key Installations',
        'Training'
    ]
    const ServicePara = [
      "Electronic government (or e-government) essentially refers to 'The utilization of Information Technology (IT), Information and Communication Technologies (ICT s), and other web-based telecommunication technologies to improve and/or enhance on the efficiency and effectiveness of service delivery in the public sector.'.[1] e-Government promotes and improves broad stakeholders contribution to national and community development, as well as deepen the governance process."
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Electronic Government'} pagelink={'electronic-government'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataEGovernment}
      ServiceHead={'Electronic Government'}
      ServicePara={ServicePara} 
      ServiceInfo={'Electronic Government & Electronic Enterprise'}
      ServiceInfoList={InfoList}  ShowInfoList={true}/>
    </>
  )
}

export default EGovernment