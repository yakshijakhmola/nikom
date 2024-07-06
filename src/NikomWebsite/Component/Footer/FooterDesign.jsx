import React from 'react'
const FooterDesign = () => {
    const FullYear = new Date().getFullYear();
    const ContactDetails = [
        {
            id: 1,
            Contact_icon: "fa-solid fa-phone-volume ",
            contact_head: "Phone Number",
            contact_link: "tel: +91 1143088860",
            contact_para: "+91 1143088860"
        },
        {
            id:2,
            Contact_icon: "fa-solid fa-envelope",
            contact_head: "Email",
            contact_link: "mailto: info@nikom.in",
            contact_para: "info@nikom.in"
        },
        {
            id:3,
            Contact_icon: "fa-solid fa-location-dot",
            contact_head: "Address",
            contact_link: "https://maps.app.goo.gl/naBNNqDcHT5NA4ds7",
            contact_para: "309, Skylark Bldg. 60, Nehru Place, New Delhi-110019 (INDIA)"
        }
    ]
  return (
    <>
    <footer className='bg-black xl:pt-10 lg:pt-10 pt-5 border-t-2 border-solid border-darkred'>
        <div className="container">
            <div className="grid xl:grid-cols-7 lg:grid-cols-7 grid-cols-1 gap-x-5 justify-center">
                <div className="xl:col-span-2 lg:col-span-2 grid-cols-1 xl:pt-0 lg:pt-0 pt-4 ">
                    <h4 className='footerhead'>About Us</h4>
                    <p className='footerpara'>Nikom – An ISO 9001 Company and Member of IGBC (Indian Green Building Council-CII) has an integrated capability to design and build State-Of-Art World Datacenters, Energy Management Solutions, Defence and Security Solutions, Asset Tracking Services , Information Technology Solutions, and AV solutions on turnkey basis for large and medium enterprises.</p>
                </div>
                <div className="xl:col-span-3 lg:col-span-3 grid-cols-1 xl:pt-0 lg:pt-0 pt-4 ">
                    <h4 className='footerhead'>Our Solutions</h4>
                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
                        <div className="footer-ulbox">
                            <ul>
                                <li><a href="" className='footera'>Data Center Consultancy</a></li>
                                <li><a href="" className='footera'>Defence and Homeland Security</a></li>
                                <li><a href="" className='footera'>IT & Networking Solutions</a></li>
                                <li><a href="" className='footera'>Data Center Design & Engineering</a></li>
                                <li><a href="" className='footera'>Data Center Project Management</a></li>
                                <li><a href="" className='footera'>Data Center Monitoring & Control</a></li>
                            </ul>
                        </div>
                        <div className="footer-ulbox">
                            <ul>
                                <li><a href="" className='footera'>Data Center Operations & Maintenance</a></li>
                                <li><a href="" className='footera'>Energy Management Solutions</a></li>
                                <li><a href="" className='footera'>Asset Tracking Service</a></li>
                                <li><a href="" className='footera'>Audio Visuals / Smart Rooms Solutions</a></li>
                                <li><a href="" className='footera'>Data Center Construction</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-2 grid-cols-1 xl:pt-0 lg:pt-0 pt-4 ">
                    <h4 className='footerhead'>Contact Us </h4>
                    {ContactDetails.map((val)=>{
                        return(
                            <div className='flex items-start gap-x-3' key={val.id}>
                                <div className="contact-info-icon">
                                    <i className={`darkred text-darkred xl:text-2xl text-xl ${val.Contact_icon}`}></i>
                                </div>
                                <div className="contact-info-head">
                                    <h6 className='text-darkred text-base font-bold'>{val.contact_head}</h6>
                                    <a href={val.contact_link} className='footera'><p>{val.contact_para}</p></a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="py-6 mt-5 border-t border-solid border-[#fd373773]">
           <div className="container">
                <div className='flex items-center flex-wrap justify-between'>
                    <div className="copyright-left">
                        <p className='footerpara'>© 2000 - {FullYear} All Rights Reserved by Nikom InfraSolutions Pvt. Ltd.</p>
                    </div>
                    <div className="">
                        <ul className='xl:mt-0 lg:mt-0 mt-3 flex items-center justify-center gap-x-4'>
                            <li><a href="#" className='footerpara'>Privacy Policy</a></li>
                            <li><a href="#" className='footerpara'>Refund Policy</a></li>
                            <li><a href="#" className='footerpara'>Sitemap</a></li>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    </footer>
    </>
  )
}

export default FooterDesign