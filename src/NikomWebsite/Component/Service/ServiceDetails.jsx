import React from 'react'
import ServiceSideBar from './ServiceSideBar';

const ServiceDetails = ({
        ServiceMainImage,
        ServiceHead, 
        ServicePara, 
        ServiceInfo, 
        ServiceInfoList, 
        ServiceFacilityHead, 
        ServiceFacilityPara,
        ServiceSecondPara,
        ShowInfoList,
        ShowFacilityList,
        ShowSecondPara,
    }) => {
  return (
    <>
        <div className='section'>
            <div className='container'>
                <div>
                    <img src={ServiceMainImage} className='rounded-3xl h-92 w-full shadow-dark-shadow' data-aos="fade-down" data-aos-duration="1000"/>  
                </div>
                <div className='grid grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 gap-x-5 mt-10'>
                    <div className='col-span-12 xl:col-span-8 lg:col-span-8'>   
                        <div className=''>
                            <div className='mb-3'>
                                <h2 className='mb-3'>{ServiceHead}</h2>
                                {ServicePara.map((valPara,id)=>(
                                    <p key={id} className='mb-3'>{valPara}</p>
                                ))}
                            </div>
                            <div className='mb-3'>
                                <div>
                                    <h4 className='mb-3'>{ServiceInfo}</h4>
                                    <ul>
                                        {ShowInfoList ? (ServiceInfoList.map((valinfo, id) => (
                                            <li className='my-3' key={id}>
                                                <p className='relative infopara pl-6'>{valinfo}</p>
                                            </li>
                                        ))
                                        ) : (<></> 
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className=''>
                                <h4 className='mb-3'>{ServiceFacilityHead}</h4>
                                <div className=''>
                                    <ul className='grid xl:grid-cols-6 grid-cols-12 gap-x-5'>
                                        {ShowFacilityList? (ServiceFacilityPara.map((valfaci, id)=>(
                                                <li className='my-3 col-span-12' key={id}>
                                                    <p className='relative infopara pl-6'>{valfaci}</p>
                                                </li>
                                            ))
                                        ): (<></>)}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                  {ShowSecondPara? (ServiceSecondPara.map((valsecondpara,id)=>(
                                    <p key={id}>{valsecondpara}</p>
                                  ))): (<></>)}          
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 xl:col-span-4 lg:col-span-4 mt-3 xl:mt-0 lg:mt-0'>
                        <ServiceSideBar/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceDetails