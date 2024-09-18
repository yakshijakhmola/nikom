import React from 'react'
import { FiChevronsRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const ServiceInnerCard = ({
    ServiceInnerImg,
    ServiceInnerHead,
    ServiceInnerPara,
    ServiceInnerLink,
}) => {
    const navigate = useNavigate();
  return (
    <>
        <div className=''>
            <img className='rounded-tr-md rounded-tl-md shadow-dark-shadow' src={ServiceInnerImg} alt="" />
            <div className='bg-white shadow-dark-shadow py-3 px-3 rounded-br-md rounded-bl-md'>
                <h4 className='line-clamp-1'>{ServiceInnerHead}</h4>
                <p className='line-clamp-2 my-2'>{ServiceInnerPara}</p>
                <a  className='redbtn'  onClick={()=>navigate(`${ServiceInnerLink}`)}>Read More <span className='text-2xl'><FiChevronsRight /></span></a>
            </div>
        </div>
    </>
  )
}

export default ServiceInnerCard