import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const DataCenterConsultancy = () => {
    const InfoList = [
        'Business Continuity & Disaster Recovery',
        'Data Center Disaster Recovery Assessment Services',
        'Data Center Virtualization Strategies & Assessment',
        'Data Center Optimization Evaluations',
        'Data Center Relocation Evaluation & Planning',
        'Data Center Consolidation Evaluation & Planning',
        'IT Technology Roadmap Planning',
        'Data Center Routing and Switching Planning & Feasibility',
        'Data Center Server Planning & Feasibility',
        'Data Center Storage Area Network (SAN) and Data Protection Planning & Feasibility'
    ]
    const ServicePara = [
      "Our Data Center Consulting Services has enterprise-wide, comprehensive approach to safeguard the company's mission critical environments. The services go through the entire lifecycle, from assessment, strategy and design, to implementation and operational services. We have the experience, expertise, proven methodologies and tools to help you manage your data center investments, improve operations and performance, and deliver excellent business results."
    ]
    const FacilityList = [
        'Data Center Planning & Pre-Design',
        'Data Center Power & Cooling Systems Analysis',
        'Data Center Feasibility Studies & Project Cost Budgeting',
        'Data Center Availability & Risk Assessment',
        'Data Center CFD Services',
        'Technology Master Format Planning',
        'Data Center Site Selection',
        'Data Center Real Estate',
        'Business Continuity & Disaster Recovery',
        'Data Center Relocation Evaluation & Planning',
        'Thermography Assessment Service',
        'Data Center Energy Usage Assessment Service',
        'Data Center Energy Efficiency Assessment Service',
        'Data Center Facility Business Strategy Consulting',
        'Data Center Renovation'
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Data Center Consultancy'} pagelink={'data-center-consultancy'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataConsultancy}
      ServiceHead={'Data Center Consultancy'}
      ServicePara={ServicePara} 
      ServiceInfo={"Information Technology"} 
      ServiceInfoList={InfoList}  ShowInfoList={true}
      ServiceFacilityHead={"Facility"}
      ServiceFacilityPara={FacilityList} ShowFacilityList={true} />
    </>
  )
}

export default DataCenterConsultancy