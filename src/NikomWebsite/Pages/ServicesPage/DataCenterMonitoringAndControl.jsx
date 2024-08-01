import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const DataCenterMonitoringAndControl = () => {
    const InfoList = [
        'Infrastructure Management & Control',
        'Performance Management / Capacity Planning',
        'Layered Security Administration including Physical, Systems, Application, Datastore, Network and Process',
        'Site Monitoring of Systems, Networks and Databases'
    ]
    const ServicePara = [
        'Data Center monitoring and control is a critical element of maintaining maximum availability for your critical operations. Nikom emphasizes utilizing IP and Web technologies to oversee and control critical support systems from just about anywhere.',
        'Our criteria for both support infrastructure systems monitoring and information technology infrastructure monitoring is the same. We believe it is vital that monitoring and control systems be cost effective, quickly deployed and implemented, easy to use, utilize intuitive alarming and escalation methodologies and provide robust reporting all from a central, secure, location.',
        'Our Data Center Monitoring & Control Services is the tenth (10) of the eleven (11) step progression of the data center project process. Data Center Implementation Services constitute the pre-installation, installation, testing, and turnover of IT infrastructure within a data center, computer room, server room, or network operations center (NOC) facility.',
        'Mission critical services require sophisticated monitoring. Monitoring systems should provide proactive management and enable the quick assessment of your present situation and notify the appropriate personnel should situations that threaten availability. In depth analysis features should help you to plan for changes in availability and/or capacity requirements. In either case, Nikom configures, sells and implements monitoring and control systems providing, at least, the following elements:'
    ]
    const FacilityList = [
        'Turnkey DCiM Solutions',
        'Customized Infrastructure Management Solutions',
        'Protocol Conversion and Aggregation',
        'Comprehensive IT Facility Monitoring'
    ]
    const ServiceSecondPara = [
        'Whether you have a single facility or multiple locations, properly managing data center assets minimizes downtime and ensures business continuity. New highly customizable solutions exist that aid in providing a single point of access for all your monitoring needs. These fully scalable systems can provide the valuable monitoring, alarming, trending and control information needed to not only react, but anticipate potential problems'
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Data Center Monitoring & Control'} pagelink={'data-center-monitoring-and-control'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataControl}
      ServiceHead={'Data Center Monitoring & Control'}
      ServicePara={ServicePara} 
      ServiceInfoList={InfoList}  ShowInfoList={true}
      ServiceFacilityHead={"Data Center Facility Monitoring and Control (DCIM)"}
      ServiceSecondPara={ServiceSecondPara} ShowSecondPara={true}
      ServiceFacilityPara={FacilityList} ShowFacilityList={true}/>
    </>
  )
}

export default DataCenterMonitoringAndControl