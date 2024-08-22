import React from 'react';
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { assets } from '../../assets/assets';
const Leadership = () => {
  return (
    <>
    <BreadcrumbDesign pagelink={'Leadership'} pagename={'Leadership'}/>
    <div className='pt pb bg-[url("./img/left-bg-techno.png")] bg-no-repeat bg-left-top'>
        <div className='container'>
            <div className='grid grid-cols-12 xl:grid-cols-12 w-full'>
                <div className='col-span-12 xl:col-span-5 z-10 relative after:content-[""] after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-full after:bg-darkred after:rotate-1 xl:after:rotate-3' data-aos="fade-down" data-aos-delay="200">
                    <img src={assets.VKGarg} className='w-full' />
                </div>
                <div className='col-span-12 xl:col-span-7 pl-0 xl:pl-20 mt-5 xl:mt-0'  data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <p className='text-darkred bg-lightred rounded-full py-1 px-5 inline-block'>Chairman</p>
                        <h2>Dr. V.K. Garg</h2>
                        <p>To foster long-lasting and mutually meaningful partnerships with our customers and business associates by always delivering a credible, ethical, and consistent solution to their business needs.</p>
                    </div>
                    <div className='mt-2'>
                        <h5>Education & Experience</h5>
                        <ul>
                            <li className='leadership-li'><p className='pl-8'> Post Doctorate from IIT Delhi</p></li>
                            <li className='leadership-li'><p className='pl-8'>Ph.D. in Physics ( Radio & Telecommunications) from IITBHU</p></li>
                            <li className='leadership-li'><p className='pl-8'>Has Global Experience working in Leadership Positions with SITA Telecommunications, SPRINT R PG India Ltd & Govt of India.</p></li>
                            <li className='leadership-li'><p className='pl-8'>Rare Distinction of Launching the Email Service In India</p></li>
                            <li className='leadership-li'><p className='pl-8'>Has been a Founder Member & Served in the past as Vice President of the “Internet Service Providers Association of India.”</p></li>
                            <li className='leadership-li'><p className='pl-8'>One of the Key architects in formulation of the Internet Policy by the Government of India.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='pb bg-[url("./img/right-bg-techno.png")] bg-no-repeat bg-right-top'>
        <div className='container'>
            <div className='grid grid-cols-1 xl:grid-cols-12 w-full place-items-center'>
                <div className='col-span-12 xl:col-span-7 pr-0 xl:pr-20 mb-5 xl:mb-0' data-aos="fade-up" data-aos-delay="200">
                    <div>
                        <span className='smallspan'>Managing Director & CEO</span>
                        <h2>Asheesh Garg</h2>
                        <p>To foster long-lasting and mutually meaningful partnerships with our customers and business associates by always delivering a credible, ethical, and consistent solution to their business needs.</p>
                    </div>
                    <div className='mt-2'>
                        <h5>Education & Experience</h5>
                        <ul>
                            <li className='leadership-li'><p className='pl-8'>B. E.(Mechanical) from IIT Roorkee</p></li>
                            <li className='leadership-li'><p className='pl-8'>MTech (Energy Studies) from IIT Delhi</p></li>
                            <li className='leadership-li'><p className='pl-8'>28 Years of Global Experience of Building Relationships</p></li>
                            <li className='leadership-li'><p className='pl-8'>Founded NIKOM in 2000</p></li>
                            <li className='leadership-li'><p className='pl-8'>Member of TiE, ISHRAE</p></li>
                            <li className='leadership-li'><p className='pl-8'>Member of Green Data Centre Alliance</p></li>
                            <li className='leadership-li'><p className='pl-8'>Passionate about Green  Datacenters and Energy Management Solutions</p></li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-12 xl:col-span-5 relative after:content-[""] after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-full after:bg-darkred after:rotate-1 xl:after:rotate-3' data-aos="fade-down" data-aos-delay="400">
                    <img src={assets.Asheesh} className='w-full' />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Leadership