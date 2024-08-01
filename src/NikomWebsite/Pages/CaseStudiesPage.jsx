import React from 'react'
import CaseStudies from '../Component/CaseStudies/CaseStudies'
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