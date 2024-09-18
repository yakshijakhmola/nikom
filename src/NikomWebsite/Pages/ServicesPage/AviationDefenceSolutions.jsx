import React from 'react'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'
import ServiceInnerCard from '../../Component/Service/ServiceInnerCard'
import { assets } from '../../../assets/assets'

const AviationDefenceSolutions = () => {
    const ServiceInnerCardContent = [
        {
            id: 1,
            ServiceInnerImg: assets.DataDefenceHomeland,
            ServiceInnerHead: 'Defence and Homeland Security',
            ServiceInnerPara: "Defence and Homeland security is a focus and niche area at Nikom for Consulting and deployment . A deep understanding of local environments, working of military, paramilitary and state police forces, and operational procedures is important to analyze",
            ServiceInnerLink:  "/defence-and-homeland-security",
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

export default AviationDefenceSolutions