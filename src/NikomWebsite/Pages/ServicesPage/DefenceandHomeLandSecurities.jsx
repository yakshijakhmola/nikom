import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const DefenceandHomeLandSecurities = () => {
    const InfoList = [
        'Advanced Combat Man System',
        'Biometrics Solutions',
        'Surveillance Solutions',
        'Command Centre',
        'Defence Systems',
        'Digital Defence Systems',
        'Fire Services Location And Management of Emergency System (FLAMES)',
        'Homeland Security & Mission-Critical Systems',
        'Police Resource Incident Management Executive System (PRIMES)'
    ]
    const ServicePara = [
      "Defence and Homeland security is a focus and niche area at Nikom for Consulting and deployment . A deep understanding of local environments, working of military, paramilitary and state police forces, and operational procedures is important to analyze the trends and assess the requirements in the market.",
      "Furthermore, security challenges vary from one region to the other, and thus the requirements can differ. NIKOM's research indicates that there is a market that is yet to be tapped in the form of Police and Paramilitary forces across various parts of India.",
      "Our edge is domain expertise in the field, reinforced with strong networks in the strategic security community of the country, from the Centre, to the states and districts level. Various solutions as per industry verticals are :"
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Defence and Homeland Security'} pagelink={'defence-and-homeland-security'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataDefenceHomeland}
      ServiceHead={'Defence and Homeland Security'}
      ServicePara={ServicePara} 
      ServiceInfo={'Defence & Homeland Security'}
      ServiceInfoList={InfoList}  ShowInfoList={true}/>
    </>
  )
}

export default DefenceandHomeLandSecurities