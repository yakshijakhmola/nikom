import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const AudioVisualsAndSmartRoomsSolutions = () => {
    const InfoList = [
        'Ensuring a great user experience by providing a simple but powerful user interface, a quick and easy way to configure and set up the equipment, and a solution that’s reliable and feature-rich.',
        'Providing the capability to centrally monitor and manage AV technology over the IT network.'
    ]
    const ServicePara = [
      "Our objective is to help customers achieve the Perfect Meeting, thereby eliminating the lost productivity that plagues the modern meeting room or classroom.",
      "To do this, we focus on two central elements where competing solutions have failed to deliver:"
    ]
    const ServiceSecondPara = [
      'In essence, NIKOM’s focus is to provide a perfect meeting environment for those who use the equipment and the IT organization that supports it – hence our objective of delivering AV for an IT world. In doing this, NIKOM is able to deliver a low overall Total Cost of Ownership (TCO), thanks to substantial savings in programming and maintenance costs combined with higher levels of overall productivity.'
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Audio Visuals / Smart Rooms Solutions'} pagelink={'audio-visuals-and-smart-rooms-solutions'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataAudioVisual}
      ServiceHead={'Audio Visuals / Smart Rooms Solutions'}
      ServicePara={ServicePara} 
      ServiceInfoList={InfoList}  ShowInfoList={true}
      ServiceSecondPara={ServiceSecondPara} ShowSecondPara={true}/>
    </>
  )
}

export default AudioVisualsAndSmartRoomsSolutions