import React from 'react'
import { FiChevronsRight } from "react-icons/fi";

const BlogCard = () => {
    const BlogCardData = [
        {
            id:1,
            blog_image: "./img/blog.jpg",
            blog_date: "12",
            blog_month: "May",
            blog_adminicon: "./img/user.svg",
            blog_admin: "By Admin",
            blog_commenticon: "./img/message.svg",
            blog_comment: "0 Comments",
            blog_name: "Necessity May Give us Best Virtual Court",
            blog_btn: "Read More",
            blog_link: ""
        },
        {
            id:2,
            blog_image: "./img/blog.jpg",
            blog_date: "20",
            blog_month: "May",
            blog_adminicon: "./img/user.svg",
            blog_admin: "By Admin",
            blog_commenticon: "./img/message.svg",
            blog_comment: "0 Comments",
            blog_name: "Necessity May Give us Best Virtual Court",
            blog_btn: "Read More",
            blog_link: ""
        },
        {
            id:3,
            blog_image: "./img/blog.jpg",
            blog_date: "28",
            blog_month: "May",
            blog_adminicon: "./img/user.svg",
            blog_admin: "By Admin",
            blog_commenticon: "./img/message.svg",
            blog_comment: "0 Comments",
            blog_name: "Necessity May Give us Best Virtual Court",
            blog_btn: "Read More",
            blog_link: ""
        }
    ]
  return (
    <>
        <div className='section'>
            <div className='container'>
                <div className='flex items-center justify-center flex-col'>
                    <p className='smallspan'>Blogs</p>
                    <h2 className='centerheading'>Explore Blogs And News</h2>
                </div>
                <div className='grid xl:grid-cols-3 grid-cols-1 gap-x-7'>
                    {BlogCardData.map((val)=>{
                        return(
                            <div key={val.id} className='xl:my-0 my-2' data-aos="fade-up" data-aos-duration="2000">
                                <div className='relative'>
                                    <img src={val.blog_image} className='relative'/>
                                    <div className='bg-darkred px-5 py-1 absolute top-3 left-6 text-center'>
                                        <h4 className='text-white'>{val.blog_date}</h4>
                                        <span className='text-sm text-white-para-color'>{val.blog_month}</span>
                                    </div>
                                </div>
                                <div className='py-5 px-5 bg-white shadow-dark-shadow'>
                                    <div className='flex items-center gap-x-8 border-b border-solid border-light-gray pb-4'>
                                        <div className='flex items-center gap-x-2'>
                                            <img src={val.blog_adminicon} className='w-3'/>
                                            <span className='parasize'>{val.blog_admin}</span>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <img src={val.blog_commenticon} className='w-3'/>
                                            <span className='parasize'>{val.blog_comment}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='my-5'>{val.blog_name}</h5>
                                        <a className="redbtn" href={val.blog_link}>{val.blog_btn} <span className='text-2xl'><FiChevronsRight /></span></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCard