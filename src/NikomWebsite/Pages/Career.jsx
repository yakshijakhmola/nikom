import React, { useState } from 'react';
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import BreadcrumbDesign from '../Component/Breadcrumb/BreadcrumbDesign';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountryCode from './Contact/CountryCode';

const Career = () => {
  return (
    <>
    <BreadcrumbDesign pagelink={'career'} pagename={'Career'}/>
    <div className='section'>
        <div className='container'>
            <div className='grid grid-cols-12 xl:grid-cols-12 gap-x-5'>
                <div className='col-span-12 xl:col-span-7 lg:col-span-7 bg-white shadow-dark-shadow p-5 xl:p-10 lg:p-10 place-items-center rounded-md mt-3 xl:mt-0' data-aos="fade-left" data-aos-delay="200">
                    <h4 className='mb-3'>Apply Online</h4>
                    <form className='mt-5'>
                        <div className='grid grid-cols-12 gap-x-5'>
                            <div className='col-span-12 xl:col-span-6 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Position Applied</label>
                                <select name="" id="" className='inputdesign'>
                                    <option value="" selected="">---Select---</option>
                                    <option value="">Sales & Marketing</option>
                                    <option value="">Accounts</option>
                                    <option value="">Legal</option>
                                    <option value="">IT</option>
                                    <option value="">Projects</option>
                                    <option value="">Operations & Services</option>
                                </select>
                            </div>
                            <div className='col-span-12 xl:col-span-6 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Name</label>
                                <input className='inputdesign' placeholder='Name'/>
                            </div>
                            <div className='col-span-12 xl:col-span-6 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Address</label>
                                <input className='inputdesign' placeholder='Address'/>
                            </div>
                            <div className='col-span-12 xl:col-span-6 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>City</label>
                                <input className='inputdesign' placeholder='City'/>
                            </div>
                            <div className='col-span-12 xl:col-span-6 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>State</label>
                                <input className='inputdesign' placeholder='State'/>
                            </div>
                            <div className='col-span-12 xl:col-span-6 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Country</label>
                                <select className='inputdesign'>
                                    {CountryCode.map((val,ind)=>{
                                        return(
                                            <option key={ind} value={`${val.name} + ${val.code}`}>{val.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='col-span-12 xl:col-span-6 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Email</label>
                                <input className='inputdesign' placeholder='Email'/>
                            </div>
                            <div className='col-span-12 xl:col-span-6 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>MobilePhone</label>
                                <input className='inputdesign' placeholder='Mobile Phone'/>
                            </div>
                            <div className='col-span-12'>
                                <label className='text-black font-bold mb-3'>Date of Birth</label>
                                <div className="grid grid-cols-12 gap-x-5">
                                    <div className='col-span-12 xl:col-span-4 md:col-span-4'>
                                        <select name="" id="" className='inputdesign'>
                                            <option value="" selected="">---Month---</option>
                                            <option value="">January</option>
                                            <option value="">Feburary</option>
                                            <option value="">March</option>
                                            <option value="">April</option>
                                            <option value="">May</option>
                                            <option value="">June</option>
                                            <option value="">July</option>
                                            <option value="">August</option>
                                            <option value="">September</option>
                                            <option value="">October</option>
                                            <option value="">November</option>
                                            <option value="">December</option>
                                        </select>
                                    </div>
                                    <div className='col-span-12 xl:col-span-4 md:col-span-4'>
                                        <select name="" id="" className='inputdesign'>
                                            <option value="" selected="">---Day---</option>
                                            <option value="">Monday</option>
                                            <option value="">Tuesday</option>
                                            <option value="">Wednesday</option>
                                            <option value="">Thrusday</option>
                                            <option value="">Friday</option>
                                            <option value="">Saturday</option>
                                            <option value="">Sunday</option>
                                        </select>
                                    </div>
                                    <div className='col-span-12 xl:col-span-4 md:col-span-4'>
                                        <select name="" id="" className='inputdesign'>
                                            <option value="" selected="">---Year---</option>
                                            <option value="">Monday</option>
                                            <option value="">Tuesday</option>
                                            <option value="">Wednesday</option>
                                            <option value="">Thrusday</option>
                                            <option value="">Friday</option>
                                            <option value="">Saturday</option>
                                            <option value="">Sunday</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 xl:col-span-12 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Work Experience</label>
                                <select name="" id="" className='inputdesign'>
                                    <option value="" selected="">-----Work-----</option>
                                </select>
                            </div>
                            <div className='col-span-12 xl:col-span-12 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Skill Set (Seperated by Comma)</label>
                                <textarea className='inputdesign' placeholder=''/>
                            </div>
                            <div className='col-span-12 xl:col-span-12 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Copy Paste Resume</label>
                                <textarea className='inputdesign' placeholder=''/>
                            </div> 
                            <div className='col-span-12 xl:col-span-12 md:col-span-6'>
                                <label className='text-black font-bold mb-3'>Attach your Resume</label>
                                <input type="file"  className='inputdesign'/>
                            </div>
                        </div>
                        <button className='dark-btn'>Submit Enquiry <FaArrowRight className='circle'/></button> 
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

export default Career