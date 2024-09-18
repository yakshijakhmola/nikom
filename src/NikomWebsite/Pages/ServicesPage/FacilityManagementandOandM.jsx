import React from 'react'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign';
import ServiceInnerCard from '../../Component/Service/ServiceInnerCard';

const FacilityManagementandOandM = () => {
    const ServiceInnerCardContent = [
        {
            id: 1,
            ServiceInnerImg: assets.DataProjectManagement,
            ServiceInnerHead: 'Data Center Project Management',
            ServiceInnerPara: "Over many years we have developed a proven project process to plan, design, and build data centers, computer rooms, and server rooms.",
            ServiceInnerLink:  "/data-center-project-management",
        },
        {
            id: 2,
            ServiceInnerImg: assets.DataEngineerMaintenance,
            ServiceInnerHead: 'Data Center Operations & Maintenance',
            ServiceInnerPara: "All data center designs are judged by their ability to provide continuous operations for the network services they support. When construction of the data center is complete, data center operations & maintenance begins. ",
            ServiceInnerLink:  "/data-center-operations-and-maintenance",
        }
    ]
  return (
    <>
        <BreadcrumbDesign pagename={'Facility Management & O&M'} pagelink={'facility-management-and-oandm'}/>
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

export default FacilityManagementandOandM