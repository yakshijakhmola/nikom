import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Try from './Try';
import { useNavigate } from 'react-router-dom';

const Try1 = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const API = "https://restcountries.com/v3.1/all";
  const HandleInput = (e) =>{
    setSearch(e.target.value)
  }
  const FetchAPI = async () => {
    try{
      const GetAllData = await axios.get(API);
      setCountry(GetAllData?.data)
      console.log(GetAllData?.data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    FetchAPI();
  },[])
  return (
    <>
      <div>
        <div className="container">
          <div><input placeholder='Search' type="text" onChange={HandleInput} value={search}/></div>
          <div className='grid grid-cols-12 gap-4'>
            {country.map((val)=>(
              <Try key={val.ccn3} CountryCard={val} onClick={()=>navigate("/service/"+val.name.common)}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Try1