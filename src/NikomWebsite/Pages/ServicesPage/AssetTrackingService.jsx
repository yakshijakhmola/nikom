import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const DefenceandHomeLandSecurities = () => {
    const InfoList = [
        'Hardware inventory tracking',
        'Software inventory tracking',
        'Associated vendors and contracts',
        'Managing asset groups',
        'Asset relationship',
        'Asset history',
        'Asset lifecycle management'
    ]
    const ServicePara = [
        'As your IT infrastructure adds more IT assets, it is hard to manually add new ones and update any changes in the old ones. Be it the software installed/upgraded or a hardware change. A simple hardware change, when tried to update manually, can become a very challenging task, this is when IT asset tracking becomes critical.',
        'NIKOM Asset Tracking helps you in tracking your hardware and software automatically. It not only automatically scans and discovers your IT assets but also updates every time there is a change in any of the IT assets.'
    ]
    const FacilityList = [
        'Discover all the assets in your network.',
        'Manage and Monitor software and hardware assets.',
        'Manage the complete IT Asset lifecycle.',
        'Ensure software license compliance.',
        'Make informed decisions about hardware and software purchases throughout the entire IT Life Cycle.',
        'Track Purchase Orders and Contracts.',
        'Know the total cost of ownership of an asset.'
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Asset Tracking Service'} pagelink={'asset-tracking-service'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataAssetTracking}
      ServiceHead={'Asset Tracking Service'}
      ServicePara={ServicePara} 
      ServiceInfo={'Nikom Asset Tracking helps you with'}
      ServiceInfoList={InfoList}  ShowInfoList={true}
      ServiceFacilityHead={"Benefits"}
      ServiceFacilityPara={FacilityList} ShowFacilityList={true}/>
    </>
  )
}

export default DefenceandHomeLandSecurities