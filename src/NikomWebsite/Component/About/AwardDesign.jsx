import React from 'react'
import { assets } from '../../../assets/assets'

const AwardDesign = () => {
  return (
    <>
      <div className='border-t border-solid border-[#0000001f] py-5' data-aos="fade-down" data-aos-duration="1000">
        <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-12 xl:col-span-6 lg:col-span-6 relative w-full h-[100%] md:pr-[30px]">
            <img src={assets.MSMECertificate}  className='rounded-lg w-full h-full' alt="" />
          </div>
          <div className="col-span-12 xl:col-span-6 lg:col-span-6  mt-5 xl:mt-0">
            <h3 className='mb-5 text-left'>MSME Performance Grading</h3>
            <p className='text-left'>Rated as SME 01 in Performance Rating by ” Brickworks Analytics”</p>
          </div>
        </div>
      </div>
      <div className='border-t border-solid border-[#0000001f] py-5' data-aos="fade-down" data-aos-duration="2000">
        <div className="grid grid-cols-12 gap-x-5 flex-row-reverse">
          <div className="col-span-12 xl:col-span-6 lg:col-span-6 relative w-full h-[100%] md:pr-[30px]"><img src={assets.MSMEAward}  className='rounded-lg w-full h-full' alt="" /></div>
          <div className="col-span-12 xl:col-span-6 lg:col-span-6 mt-5 xl:mt-0">
            <h3 className='mb-5 text-left'>ASSOCHAM Award ( 2022 )</h3>
            <p className='text-left'>Director, Mrs Swati Garg and MD, Mr Asheesh Garg , receiving the
            MSME Excellence Award from Honorable Union Minister of MSME, Sri Narayan Rane</p>
          </div>
        </div>
      </div>
      <div className='border-t border-solid border-[#0000001f] py-5' data-aos="fade-down" data-aos-duration="3000">
        <div className="grid grid-cols-12 gap-x-5 flex-row-reverse">
          <div className="col-span-12 xl:col-span-6 lg:col-span-6 relative w-full h-[100%] md:pr-[30px]"><img src={assets.MSME3}  className='rounded-lg w-full h-full' alt="" /></div>
          <div className="col-span-12 xl:col-span-6 lg:col-span-6 mt-5 xl:mt-0">
            <h3 className='mb-5 text-left'>Vayoshrestha Samman ( 2017 )</h3>
            <p className='text-left'>Chairman, Dr. V. K. Garg Receiving National Award on behalf of his father for significant
            philanthropic contribution in the Education and Health sector from the Honorable President of India.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AwardDesign