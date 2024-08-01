import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Try2 = ({CountryDetails}) => {
    const [data, setData] = useState({})
    const {name} = useParams();
    const APIGet = `https://restcountries.com/v3.1/name/${name}`;
    const FetchGetAPI = async () =>{
        try{
            const GetAllData = await axios.get(APIGet);
            setData(GetAllData?.data[0])
            console.log(GetAllData?.data[0])
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        FetchGetAPI();
    },[name])
  return (
    <>
        <div > 
            <h3>{name}</h3>
        </div>
    </>
  )
}

export default Try2