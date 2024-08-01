import React from 'react'
import { useNavigate } from 'react-router-dom';

const BreadcrumbDesign = ({pagename, pagelink}) => {
    const navigate = useNavigate();
  return (
    <>
        <div>
            <div className="relative bg-[url('assets/breadcrumb-techno.webp')] xl:py-24 lg:py-24 md:py-20 py-10">
                <div className='px-5 xl:px-40'>
                    <ul className='flex gap-x-5 text-white'>
                        <li><a onClick={()=>navigate('/')}>Home</a></li>
                        <li><a>/</a></li>
                        <li><a>{pagelink}</a></li>
                    </ul>
                    <h1 className='text-white'>{pagename}</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default BreadcrumbDesign