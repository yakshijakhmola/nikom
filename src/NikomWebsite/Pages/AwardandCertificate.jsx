import React from 'react'
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign'
import AwardDesign from '../Component/About/AwardDesign'

const AwardandCertificate = () => {
  return (
    <>
      <BreadcrumbDesign pagename={'Awards and Recognition'} pagelink={'awards-and-recognition'}/>
      <div className='pt pb'>
        <div className="container">
          <AwardDesign/>
        </div>
      </div>
    </>
  )
}

export default AwardandCertificate