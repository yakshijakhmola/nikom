import React from 'react'
import { FiChevronsRight } from "react-icons/fi";
const CaseStudies = () => {
  const CaseStudiesjson = [
    {
      CaseStudies_image: "./img/case-studie/case-studies-detail.jpg",
      CaseStudies_head: "Case studies 1",
      CaseStudies_para: "Our Data Center Consulting Services has enterprise-wide, comprehensive approach to safeguard the company's mission critical environments.",
      casestudies_btn: "Read More"
    },
    {
      CaseStudies_image: "./img/case-studie/case-studies-detail.jpg",
      CaseStudies_head: "Case studies 1",
      CaseStudies_para: "Our Data Center Consulting Services has enterprise-wide, comprehensive approach to safeguard the company's mission critical environments.",
      casestudies_btn: "Read More"
    },
    {
      CaseStudies_image: "./img/case-studie/case-studies-detail.jpg",
      CaseStudies_head: "Case studies 1",
      CaseStudies_para: "Our Data Center Consulting Services has enterprise-wide, comprehensive approach to safeguard the company's mission critical environments.",
      casestudies_btn: "Read More"
    },
    {
      CaseStudies_image: "./img/case-studie/case-studies-detail.jpg",
      CaseStudies_head: "Case studies 1",
      CaseStudies_para: "Our Data Center Consulting Services has enterprise-wide, comprehensive approach to safeguard the company's mission critical environments.",
      casestudies_btn: "Read More"
    }
  ]
  return (
    <>
      <div className='section'>
        <div className='container'>
          <div className='flex items-center justify-center flex-col'>
            <p className='smallspan'>Case Studies</p>
            <h2 className='centerheading'>Featured Case Study</h2>
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-20'>
            {CaseStudiesjson.map((val,ind)=>{
              return(
                <div className='grid grid-cols-1 xl:grid-cols-12 mb-3 bg-light-white rounded-sm border border-solid border-darkred' key={ind} data-aos="fade-right" data-aos-delay={(ind +1) * 100}>
                  <div className=' col-span-1 xl:col-span-5 py-5'>
                    <img src={val.CaseStudies_image} className='rounded-sm h-full -ml-8 hover:scale-105 transition-all ease-linear duration-300'/>
                  </div>
                  <div className='pl-10 pr-5 py-5 col-span-1 xl:col-span-7'>
                    <h4 className=''>{val.CaseStudies_head}</h4>
                    <p className='my-3'>{val.CaseStudies_para}</p>
                    <a className='redbtn'>{val.casestudies_btn}<span className='text-2xl'><FiChevronsRight /></span></a>
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

export default CaseStudies