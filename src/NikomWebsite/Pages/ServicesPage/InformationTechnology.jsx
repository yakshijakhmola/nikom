import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const InformationTechnology = () => {
    const InfoList = [
        'Servers/Compute Power',
        'SAN & NAS Equiptment',
        'Tape Backup Systems',
        'Network Equiptment(LAN)',
        'External World Connectivity(WAN)',
        'Information Security System',
        'Data Center Safety & Security Systems',
        'Enterprise Management Systems'
    ]
    const ServicePara = [
      "Nikom is a leading supplier and integrator of data centre, networking, enterprise secure application delivery and universal access solutions and provides the following services across all major verticals."
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Information Technology'} pagelink={'information-technology'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataItNetwork}
      ServiceHead={'Information Technology'}
      ServicePara={ServicePara} 
      ServiceInfo={'Product Portfolio'}
      ServiceInfoList={InfoList}  ShowInfoList={true}/>
    </>
  )
}

export default InformationTechnology