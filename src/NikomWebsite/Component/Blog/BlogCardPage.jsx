import React from 'react'
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'
import BlogCard from './BlogCard'

const BlogCardPage = () => {
  return (
    <>
        <BreadcrumbDesign pagename={'Blogs'} pagelink={'blogs'}/>
        <BlogCard/>
    </>
  )
}

export default BlogCardPage