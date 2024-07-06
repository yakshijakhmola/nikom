import React from 'react'
import NavbarDesign from '../Component/Navbar/NavbarDesign'
import CaseStudies from '../Component/CaseStudies/CaseStudies'
import FooterDesign from '../Component/Footer/FooterDesign'
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign'

const CaseStudiesPage = () => {
  return (
    <>
        <BreadcrumbDesign pagelink={'Case Studies'} pagename={'Case Studies'}/>
        <CaseStudies/>
    </>
  )
}

export default CaseStudiesPage