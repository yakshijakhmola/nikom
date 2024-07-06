import React from 'react'
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'
import BlogCard from './BlogCard'
import BlogDetails from './BlogDetails'

const BlogCardPage = () => {
  return (
    <>
        <BreadcrumbDesign pagename={'Blogs'} pagelink={'blogs'}/>
        <BlogCard/>
        <BlogDetails/>
    </>
  )
}

export default BlogCardPage