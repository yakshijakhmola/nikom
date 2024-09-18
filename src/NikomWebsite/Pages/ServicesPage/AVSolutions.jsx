import React from 'react'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'
import ServiceInnerCard from '../../Component/Service/ServiceInnerCard'
import { assets } from '../../../assets/assets'

const AVSolutions = () => {
    const ServiceInnerCardContent = [
        {
            id: 1,
            ServiceInnerImg: assets.DataAudioVisual,
            ServiceInnerHead: 'Audio Visuals / Smart Rooms Solutions',
            ServiceInnerPara: "Our objective is to help customers achieve the Perfect Meeting, thereby eliminating the lost productivity that plagues the modern meeting room or classroom.",
            ServiceInnerLink:  "/audio-visuals-and-smart-rooms-solutions",
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

export default AVSolutions