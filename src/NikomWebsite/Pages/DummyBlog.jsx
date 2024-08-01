import React from 'react'
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign'
import BlogDetails from '../Component/Blog/BlogDetails'

const DummyBlog = () => {
  return (
    <>
        <BreadcrumbDesign pagename={'Blog1'} pagelink={'/blog1'}/>
        <BlogDetails/>
    </>
  )
}

export default DummyBlog