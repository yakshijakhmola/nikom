import React from 'react'
import ServiceCard from '../Component/Service/ServiceCard'
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign'

const ServicePage = () => {
  return (
    <>
       <BreadcrumbDesign pagelink={'Service'} pagename={'Service'}/>
       <ServiceCard/>
    </>
  )
}

export default ServicePage