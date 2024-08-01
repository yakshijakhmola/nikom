import React from 'react'
import { FaArrowRight} from "react-icons/fa6";
const SideBarBlog = () => {
    const SideBarBlogJson = [
        {
            BlogSideBar_image: "../img/blog.jpg",
            BlogSideBar_link:"",
            BlogSideBar_name: "Exclusive Benefits of Hiring Energy Audit Consultants and Services"
        },
        {
            BlogSideBar_image: "../img/blog.jpg",
            BlogSideBar_link:"",
            BlogSideBar_name: "Exclusive Benefits of Hiring Energy Audit Consultants and Services"
        },
        {
            BlogSideBar_image: "../img/blog.jpg",
            BlogSideBar_link:"",
            BlogSideBar_name: "Exclusive Benefits of Hiring Energy Audit Consultants and Services"
        },
        {
            BlogSideBar_image: "../img/blog.jpg",
            BlogSideBar_link:"",
            BlogSideBar_name: "Exclusive Benefits of Hiring Energy Audit Consultants and Services"
        }
    ]
  return (
    <>
        <div className='col-span-12 xl:col-span-4 lg:col-span-4 mt-3 xl:mt-0'>
            <div className='bg-white shadow-dark-shadow p-5 rounded-md'>
                <h5 className='mb-3'>Leave a Comment</h5>
                <form className=''>
                    <div>
                        <input className='inputdesign' placeholder='Name*'/>
                    </div>
                    <div>
                        <input className='inputdesign' placeholder='Email*'/>
                    </div>
                    <div>
                        <input className='inputdesign' placeholder='Phone*'/>
                    </div>
                    <div>
                        <input className='inputdesign' placeholder='Comment*'/>
                    </div>
                    <div>
                        <textarea className='inputdesign' placeholder='Enquiry'/>
                    </div> 
                    <button className='dark-btn'>Submit Enquiry <FaArrowRight className='circle'/></button> 
                </form>
            </div>
            <div className='mt-3 bg-white shadow-dark-shadow p-5 rounded-md'>
                <h5 className='mb-3'>Recent Post</h5>
                {SideBarBlogJson.map((Blogval,id)=>{
                    return(
                        <>
                            <div className='grid grid-cols-12 place-items-center mb-3 py-2 gap-x-5 hover:bg-white hover:shadow-dark-shadow hover:rounded-md transition-all duration-600 ease-out' key={id}>
                                <img src={Blogval.BlogSideBar_image} className='w-16 h-16 col-span-3 rounded-lg'/>
                                <a href={Blogval.BlogSideBar_link} className='col-span-9 hover:text-darkred text-black'><p>{Blogval.BlogSideBar_name}</p></a>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default SideBarBlog