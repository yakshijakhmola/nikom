import React from 'react'
import { useNavigate } from 'react-router-dom';

const BreadcrumbDesign = ({pagename, pagelink}) => {
    const navigate = useNavigate();
  return (
    <>
        <div>
            <div className="relative bg-[url('/img/breadcrumb.jpg')] py-20 after:content-[''] after:absolute after:top-0 after:right-0 after:bg-[url('/img/breadcrumb-techno.png')] after:w-full after:h-full after:bg-no-repeat after:bg-contain after:bg-right">
                <div className='px-10 xl:px-40'>
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