import React from 'react'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'
import ServiceInnerCard from '../../Component/Service/ServiceInnerCard'
import { assets } from '../../../assets/assets'

const SafetyandSmartCitySolutions = () => {
  const ServiceInnerCardContent = [
    {
        id: 1,
        ServiceInnerImg: assets.DataManagement,
        ServiceInnerHead: 'Energy Management Solutions',
        ServiceInnerPara: "We provide our clients with a one-stop energy management solution to all of their energy conservation needs. Our goal is to reduce the overall energy consumption of your business up to 40%, perhaps more.",
        ServiceInnerLink:  "/energy-management-solutions",
    },
    {
        id: 2,
        ServiceInnerImg: assets.DataEGovernment,
        ServiceInnerHead: 'Electronic Government',
        ServiceInnerPara: "Electronic government (or e-government) essentially refers to 'The utilization of Information Technology (IT), Information and Communication Technologies (ICT s), and other web-based telecommunication technologies to improve and/or enhance on the",
        ServiceInnerLink:  "/electronic-government",
    },
    {
        id: 3,
        ServiceInnerImg: assets.DataTransportManagement,
        ServiceInnerHead: 'Intelligent Transport Management',
        ServiceInnerPara: "Intelligent transportation systems (ITS) are advanced applications which, without embodying intelligence as such, aim to provide innovative services relating to different modes of transport and traffic management and enable various users to be better informed",
        ServiceInnerLink:  "/intelligent-transport-management",
    }
]
  return (
    <>
    <BreadcrumbDesign pagename={'Safety and Smart City Solutions'} pagelink={'managing-data-centre-lifecycle'}/>
    <div className='pt pb'>
      <div className="container">
        <div className="grid grid-cols-12 gap-x-5">
          {ServiceInnerCardContent.map((card)=>{
            return(
              <div className="col-span-12 md:col-span-4 my-3"  key={card.id}>
                <ServiceInnerCard
                  ServiceInnerImg={card.ServiceInnerImg}
                  ServiceInnerHead={card.ServiceInnerHead}
                  ServiceInnerPara={card.ServiceInnerPara}
                  ServiceInnerLink={card.ServiceInnerLink}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
</>
  )
}

export default SafetyandSmartCitySolutions