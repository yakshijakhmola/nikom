import React from 'react'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'
import ServiceInnerCard from '../../Component/Service/ServiceInnerCard'
import { assets } from '../../../assets/assets'

const ManagingDataCentreLifecycle = () => {
    const ServiceInnerCardContent = [
        {
            id: 1,
            ServiceInnerImg: assets.DataConsultancy,
            ServiceInnerHead: 'Data Center Consultancy',
            ServiceInnerPara: "Our Data Center Consulting Services has enterprise-wide, comprehensive approach to safeguard the company's mission critical environments.",
            ServiceInnerLink:  "/data-center-consultancy",
        },
        {
            id: 2,
            ServiceInnerImg: assets.DataCenterEngineer,
            ServiceInnerHead: 'Data Center Design & Engineering',
            ServiceInnerPara: "We specialize in the design and ongoing support of data centers, computer rooms, web-hosting facilities, network operations centers, telecommunications centers, as well as other highly technical facilities with always ready requirements.",
            ServiceInnerLink:  "/data-center-design-and-engineering",
        },
        {
            id: 3,
            ServiceInnerImg: assets.DataConstruction,
            ServiceInnerHead: 'Data Center Construction',
            ServiceInnerPara: "We are infrastructure solutions provider specializing in highly available, scalable, redundant and manageable, turnkey solutions for IT environments from utility-to-desktop. ",
            ServiceInnerLink:  "/data-center-construction",
        },
        {
            id: 4,
            ServiceInnerImg: assets.DataControl,
            ServiceInnerHead: 'Data Center Monitoring & Control',
            ServiceInnerPara: "Data Center monitoring and control is a critical element of maintaining maximum availability for your critical operations. Nikom emphasizes utilizing IP and Web technologies to oversee and control critical support systems from just about anywhere.",
            ServiceInnerLink:  "/data-center-monitoring-and-control",
        }
    ]
  return (
    <>
        <BreadcrumbDesign pagename={'Managing Data Centre Lifecycle'} pagelink={'managing-data-centre-lifecycle'}/>
        <div className='pt pb'>
            <div className="container">
                <div className="grid grid-cols-12 gap-x-5">
                    {ServiceInnerCardContent.map((card)=>{
                        return(
                            <div className="col-span-12 md:col-span-4 my-3" key={card.id}>
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

export default ManagingDataCentreLifecycle