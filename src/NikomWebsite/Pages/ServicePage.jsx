import React from 'react'
import ServiceCard from '../Component/Service/ServiceCard'
import NavbarDesign from '../Component/Navbar/NavbarDesign'
import FooterDesign from '../Component/Footer/FooterDesign'
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