import React from 'react'

const Try = ({CountryCard, onClick}) => {
  return (
    <>
      <div className='col-span-4 h-full bg-white shadow-xl rounded-xl py-5' onClick={onClick}>
        <img src={CountryCard.flags.png}/>
        <h5>{CountryCard.name.common}</h5>
        <p>{CountryCard.region}</p>
      </div>
    </>
  )
}

export default Try