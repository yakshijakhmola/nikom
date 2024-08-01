import React from 'react'
import SideBarBlog from "./SideBarBlog"

const BlogDetails = () => {
  return (
    <div className='section'>
        <div className="container">
            <div className="grid grid-cols-12 gap-x-5">
                <div className='col-span-12 xl:col-span-8 lg:col-span-8'>
                    <div className='relative'>
                        <img src='../img/blog.jpg' className='rounded-tl-md rounded-tr-md w-full'/>
                        <div className='bg-darkred px-5 py-1 absolute top-3 left-6 text-center rounded-md'>
                            <h4 className='text-white'>07</h4>
                            <span className='text-sm text-white-para-color'>July</span>
                        </div>
                    </div>
                    <div className="bg-white shadow-dark-shadow rounded-bl-md rounded-br-md p-5">
                        <div className=''>
                            <h5>Exclusive Benefits of Hiring Energy Audit Consultants and Services</h5>
                            <p className='mt-3'>An energy audit would definitely do not mean to change and upgrade all the appliances in the residential and office spaces. But an efficient energy could help to vary the prospect of energy, according to the needs and desires of the people. There are so many benefits that could be availed by hiring energy audit consultant services. Some of the most valuable benefits are discussed below.</p>
                            <p className='mt-3'>In most of the cases of energy audit management, would be there to look through the spaces thoroughly and will make sure to ensure the spaces fitted with electric systems. Hereby, they will make note of corresponding issues to make changes as per the desire of the clients and customers in the future. These changes would improve the way the energy is presently being used in each and every part of houses and work spaces. By consulting an energy audit service, one might be able to acquire beneficial tips on the prospects and perspectives of using new appliances or technologies. The energy audit services would the ways that can save on energy. The energy audit consultants would also help the clients and customers to get provided with activities for inspection to solve issues and to get instant solutions.</p>
                        </div>
                        <div className='mt-5'>
                            <h6>Services Offered By Energy Audit Consulting Companies</h6>
                            <p className='mt-3'>By choosing the desired and best reputed and a well recognized energy audit consulting company, people could be able to get defined by an ability to reduce and to cut out utility bills that are unnecessarily pertaining to electricity. The energy audit company and the consultants would make the homes and work spaces to be more efficient in saving energy even without changing a single appliance. There are several numerous energy audits and consulting companies and service providers started to produce green electrical systems to make use of low energy and hereby the companies would provide ideal solutions and services to reduce the consumption of electricity in a very cost effective manner.</p>
                        </div>
                        <div className='mt-5'>
                        </div>
                    </div>  
                </div>
                <SideBarBlog/>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails