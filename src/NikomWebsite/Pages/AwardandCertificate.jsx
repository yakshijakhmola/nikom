import React from 'react'
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign'
import AwardDesign from '../Component/About/AwardDesign'

const AwardandCertificate = () => {
  return (
    <>
      <BreadcrumbDesign pagename={'Awards and Certificate'} pagelink={'awards-and-certificate'}/>
      <div className='section'>
        <div className="container">
          <AwardDesign/>
        </div>
      </div>
    </>
  )
}

export default AwardandCertificate