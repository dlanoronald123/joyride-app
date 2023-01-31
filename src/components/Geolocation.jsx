import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Component.scss'


const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `914766883f605a52eaed2e7965bf66aa`


function Geolocation() {

  const [latitude, setLatitude] = useState('');
  const [longtitude, setLongtitude] = useState('');
  const [result, setResult] = useState({});

  useEffect(()=> { 
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude.toFixed(2);
      let lon = position.coords.longitude.toFixed(2);
      setLatitude(lat)
      setLongtitude(lon)
    })

    let apiEndpoint = `${API_endpoint}lat=${latitude}&lon=${longtitude}&appid=${API_key}`
    axios.get(apiEndpoint)
    .then((res) => {
      console.log(res.data)
      setResult(res.data)
    })
	}, [latitude,longtitude])

  return (
    <div className='geo-wrapper'>
      <h3 className='geo-loc'>Location: <span>{result.name}</span></h3>
      <h3 className='geo-temp'>Temperature: <span>250°F</span></h3>
    </div>
  )
}

export default Geolocation