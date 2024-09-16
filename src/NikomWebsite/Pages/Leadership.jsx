import React from 'react';
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { assets } from '../../assets/assets';
const Leadership = () => {
  return (
    <>
    <BreadcrumbDesign pagelink={'Leadership'} pagename={'Leadership'}/>
    <div className='pt bg-[url("./img/left-bg-techno.png")] bg-no-repeat bg-left-top'>
        <div className='container'>
            <div className='grid grid-cols-12 xl:grid-cols-12 w-full md:gap-x-3'>
                <div className='col-span-12 md:col-span-5 xl:col-span-3 z-10 relative after:content-[""] after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-full xl:after:bg-darkred after:rotate-1 xl:after:rotate-3 md:after:bg-none after:bg-none' data-aos="fade-down" data-aos-delay="200">
                    <img src={assets.VKGarg} className='' />
                </div>
                <div className='col-span-12 md:col-span-7 xl:col-span-9 pl-0 xl:pl-20 mt-5 xl:mt-0'  data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <h2>Dr. V.K. Garg</h2>
                        <p className='text-darkred inline-block mt-2'>Chairman Nikom InfraSolutions Pvt. Ltd.</p>
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
    <div className='pt bg-[url("./img/right-bg-techno.png")] bg-no-repeat bg-right-top'>
        <div className='container'>
            <div className='grid grid-cols-12 xl:grid-cols-12 w-full'>
                <div className='col-span-12 xl:col-span-9 pr-0 xl:pr-20 mt-5 xl:mb-0' data-aos="fade-up" data-aos-delay="200">
                    <div>
                        <h2>Asheesh Garg</h2>
                        <p className='text-darkred inline-block mt-2'>Managing Director & CEO Nikom InfraSolutions Pvt. Ltd.</p>
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
                <div className='col-span-12 xl:col-span-3 relative after:content-[""] after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-full xl:after:bg-darkred after:rotate-1 xl:after:rotate-3 md:after:bg-none after:bg-none' data-aos="fade-down" data-aos-delay="400">
                    <img src={assets.Asheesh} className='' />
                </div>
            </div>
        </div>
    </div>
    <div className='pt pb bg-[url("./img/left-bg-techno.png")] bg-no-repeat bg-left-top'>
        <div className='container'>
            <div className='grid grid-cols-12 xl:grid-cols-12 w-full'>
                <div className='col-span-12 xl:col-span-3 z-10 relative after:content-[""] after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-full xl:after:bg-darkred after:rotate-1 xl:after:rotate-3 md:after:bg-none after:bg-none' data-aos="fade-down" data-aos-delay="200">
                    <img src={assets.ArinLeader} className='' />
                </div>
                <div className='col-span-12 xl:col-span-9 pl-0 xl:pl-20 mt-5 xl:mt-0'  data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <h2>Arin Kumar Sarkar</h2>
                        <p className='text-darkred inline-block mt-2'>Vice president Nikom InfraSolutions Pvt. Ltd.</p>
                    </div>
                    <div className='mt-2'>
                        <h5>Education & Experience</h5>
                        <ul>
                            <li className='leadership-li'><p className='pl-8'>LLB from Symbiosis International University Pune | Post-Graduation in Export Management</p></li>
                            <li className='leadership-li'><p className='pl-8'>30+ Years of Experience in Business Development with Diverse Cultural Insights</p></li>
                            <li className='leadership-li'><p className='pl-8'>Expertise in Working with 14 Different Nationalities</p></li>
                            <li className='leadership-li'><p className='pl-8'>Proven Leader in Driving Strategic Growth Initiatives</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='pb bg-[url("./img/right-bg-techno.png")] bg-no-repeat bg-right-top'>
        <div className='container'>
            <div className='grid grid-cols-1 xl:grid-cols-12 w-full'>
                <div className='col-span-12 xl:col-span-9 pr-0 xl:pr-20 mb-5 xl:mb-0' data-aos="fade-up" data-aos-delay="200">
                    <div>
                        <h2>Vinod Sharma </h2>
                        <p className='text-darkred inline-block mt-2'>Chief Technology Officer (CTO) Nikom InfraSolutions Pvt. Ltd.</p>
                    </div>
                    <div className='mt-2'>
                        <h5>Education & Experience</h5>
                        <ul>
                            <li className='leadership-li'><p className='pl-8'>BE in Computer Engineering | MBA from FMS Delhi</p></li>
                            <li className='leadership-li'><p className='pl-8'>30 Years of Global Experience in Building Relationships and Driving Digital Transformation</p></li>
                            <li className='leadership-li'><p className='pl-8'>Former CEO at TCIL (KSA), Sr. Director at LTI, and Vice President at Coforge</p></li>
                            <li className='leadership-li'><p className='pl-8'>Passionate Advocate for Green Data Centers and Energy Management Solutions</p></li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-12 xl:col-span-3 relative after:content-[""] after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-full xl:after:bg-darkred after:rotate-1 xl:after:rotate-3 md:after:bg-none after:bg-none' data-aos="fade-down" data-aos-delay="400">
                    <img src={assets.VinodLeader} className='' />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Leadership