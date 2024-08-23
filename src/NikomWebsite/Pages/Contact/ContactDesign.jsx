import React, { useState } from 'react';
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import CountryCode from './CountryCode';
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactDesign = () => {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6881514956517!2d77.25022242455387!3d28.549091687866646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3363da810b7%3A0x5dce223f1d106045!2sNIKOM%20INFRA%20SOLUTIONS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1716962401013!5m2!1sen!2sin" width="100%" height="200" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'; 
    const ContactData = [
        {
            contact_icon: "fa-solid fa-phone-volume ",
            contact_name: "Call Us",
            contact_info: "+91 11 43088860",
            contact_link: "tel: +91 11 43088860"
        },
        {
            contact_icon: "fa-solid fa-envelope",
            contact_name: "Email Id",
            contact_info: "	info@nikom.in",
            contact_link: "mailto: info@nikom.in"
        },
        {
            contact_icon: "fa-solid fa-location-dot",
            contact_name: "Address",
            contact_info: "W-23 , phase-II , Okhla industrial Area , New Delhi-110020",
            contact_link: "tel: +91 9876543210"
        }
    ]
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [country, setcountry] = useState("");
    const [companyname, setcompanyname] = useState("");
    const [enquiry, setenquiry] = useState("");
    const validation = (i) =>{
        i.preventDefault();
        if(name === ""){
            toast.warning("Enter Your Name")
        }
        else if(!isNaN(name)){
            toast.warning("Only Characthers Allowed")
        }
        else if(name.length <= 2){
            toast.warning("Name Greather than 2 Words")
        }

        else if(email === ""){
            toast.warning("Enter Your Email")
        }
        else if(phone === ""){
            toast.warning("Enter Your Phone")
        }
        else if(phone.length > 10 || phone.length < 10){
            toast.warning("Only 10 Digits Number Allowed!")
        }
        
        else if(address === ""){
            toast.warning("Enter Your Address")
        }
        else if(country === ""){
            toast.warning("Select Your Country")
        }
        else if(companyname === ""){
            toast.warning("Enter Your Company Name")
        }
        else if(enquiry === ""){
            toast.warning("Enter Your Enquiry")
        }
        else(
            toast.success("Thank You for Submission")
        )
        setname(" ")
        setemail(" ")
        setphone(" ")
        setaddress(" ")
        setcountry(" ")
        setcompanyname(" ")
        setenquiry(" ")
    }
  return (
    <>
        <BreadcrumbDesign pagelink={'Contact'} pagename={'Contact'}/>
        <div className='section'>
            <div className='container'>
                <div className='grid grid-cols-12 xl:grid-cols-12 gap-x-5'>
                    <div className='col-span-12 xl:col-span-5 lg:col-span-5 bg-white shadow-dark-shadow p-5 xl:p-10 lg:p-10 rounded-md' data-aos="fade-right" data-aos-delay="100">
                        <h4 className='mb-3'>Contact Information</h4>
                        <div className='mt-5'>
                            {ContactData.map((val,ind)=>{
                                return(
                                    <div className='flex items-start gap-x-10 my-2' key={ind}>
                                        <div className='text-darkred text-2xl'>
                                            <i className={val.contact_icon}></i>
                                        </div>
                                        <div>
                                            <h6 className='text-darkred mb-1'>{val.contact_name}</h6>
                                            <a href={val.contact_link}><p>{val.contact_info}</p></a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="App my-5">
                            <Iframe iframe={iframe} />,
                        </div>
                    </div>
                    <div className='col-span-12 xl:col-span-7 lg:col-span-7 bg-white shadow-dark-shadow p-5 xl:p-10 lg:p-10 rounded-md mt-3 xl:mt-0' data-aos="fade-left" data-aos-delay="200">
                        <h4 className='mb-3'>Get in Touch </h4>
                        <form className='mt-5' onSubmit={validation}>
                            <div>
                                <input className='inputdesign' placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/>
                            </div>
                            <div>
                                <input className='inputdesign' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                            </div>
                            <div>
                                <input className='inputdesign' placeholder='Phone' value={phone} onChange={(e)=>setphone(e.target.value)}/>
                            </div>
                            <div>
                                <input className='inputdesign' placeholder='Address' value={address} onChange={(e)=>setaddress(e.target.value)}/>
                            </div>
                            <div>
                                <select className='inputdesign' value={country} onChange={(e)=>setcountry(e.target.value)}>
                                    {CountryCode.map((val,ind)=>{
                                        return(
                                            <option key={ind} value={`${val.name} + ${val.code}`}>{val.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div>
                                <input className='inputdesign' placeholder='Company Name' value={companyname} onChange={(e)=>setcompanyname(e.target.value)}/>
                            </div>
                            <div>
                                <textarea className='inputdesign' placeholder='Enquiry' value={enquiry} onChange={(e)=>setenquiry(e.target.value)}/>
                            </div> 
                            <button className='dark-btn' onClick={validation}>Submit Enquiry <FaArrowRight className='circle'/></button> 
                        </form>
                        <ToastContainer
                            position="top-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactDesign