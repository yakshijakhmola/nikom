import React from 'react'
import { RiCheckDoubleLine } from "react-icons/ri";
import NavbarDesign from '../Navbar/NavbarDesign';
import FooterDesign from '../Footer/FooterDesign';
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign';
const CaseStudiesDetails = () => {
  return (
    <>
        <BreadcrumbDesign pagelink={'Case Studies Details'} pagename={'Case Studies Details'}/>
        <div className='section'>
            <div className='container'>
                <div>
                    <div>
                        <div>
                            <img src='./img/case-studie/case-studies-detail.jpg' className='rounded-lg'/>
                        </div>
                        <div className='mt-5'>
                            <h2 className='mb-2'>Case Studies Details</h2>
                            <p>Our customized content solutions utilize key word density that we craft specifically for your needs. We take pride in writing original, effective and engaging content that sets you apart in an Internet awash with thin, dull filler copy. We develop your feature articles, newsletters, white papers, social media messages harmoniously to generate top internet rankings in any market. We take pride in giving your blog, newsletter or website the professional polish it deserves and helping you build your brand.Our marketing team has more than three decades of industry experience developing and promoting content across a broad spectrum of channels. Our integrated marketing strategies have a proven success record backed with industry-leading database management tools. When you choose Business Content, you gain access to some of the most informative analytics in the industry, making every campaign an investment in your future success.</p>
                            <p className='mt-2'>Our customized content solutions utilize key word density that we craft specifically for your needs. We take pride in writing original, effective and engaging content that sets you apart in an Internet awash with thin, dull filler copy. We develop your feature articles, newsletters, white papers, social media messages harmoniously to generate top internet rankings in any market. We take pride in giving your blog, newsletter or website the professional polish it deserves and helping you build your brand.Our marketing team has more than three decades of industry experience developing and promoting content across a broad spectrum of channels. Our integrated marketing strategies have a proven success record backed with industry-leading database management tools. When you choose Business Content, you gain access to some of the most informative analytics in the industry, making every campaign an investment in your future success.</p>
                        </div>
                        <div className='mt-5'>
                            <div className='grid xl:grid-cols-4 grid-cols-1 py-4 px-5 z-10 relative border-y-2'>
                                <div className='flex items-center gap-x-2'>
                                    <p className='text-center text-darkred'>Client:</p>
                                    <p className='text-center'>Alonso D. Dowson</p>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <p className='text-center text-darkred'>Date:</p>
                                    <p className='text-center'>Alonso D. Dowson</p>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <p className='text-center text-darkred'>Services:</p>
                                    <p className='text-center'>Alonso D. Dowson</p>
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <p className='text-center text-darkred'>Category:</p>
                                    <p className='text-center'>Alonso D. Dowson</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h2 className='mb-2'>Our Challenge</h2>
                            <p>Our customized content solutions utilize key word density that we craft specifically for your needs. We take pride in writing original, effective and engaging content that sets you apart in an Internet awash with thin, dull filler copy. We develop your feature articles, newsletters, white papers, social media messages harmoniously to generate top internet rankings in any market.</p>
                            <div className='mt-5'>
                                <ul className='grid xl:grid-cols-3 grid-cols-1'>
                                    <li className='my-1 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Technology Consultancy</p></li>
                                    <li className='my-1 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Technology Consultancy</p></li>
                                    <li className='my-1 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Technology Consultancy</p></li>
                                    <li className='my-1 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Technology Consultancy</p></li>
                                    <li className='my-1 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Technology Consultancy</p></li>
                                    <li className='my-1 flex items-center'><RiCheckDoubleLine className='text-darkred'/><p className='pl-5'>Technology Consultancy</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h2 className='mb-2'>Project Overview</h2>
                            <p>Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie, ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie id.</p>
                            <div className='mt-5 grid xl:grid-cols-2 grid-cols-1 gap-x-5'>
                               <div>
                                    <img src='./img/case-studie/case-studies-detail.jpg' className='rounded-lg shadow-light-shadow'/>
                               </div>
                               <div>
                                    <img src='./img/case-studie/case-studies-detail.jpg' className='rounded-lg shadow-light-shadow'/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CaseStudiesDetails