import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../styles/dashboard.css"
export default function Dashboard() {
    const [data,setData]=useState({})

    useEffect(()=>{
         axios.get("https://api.covid19api.com/summary ").then((res)=>{
            setData({...data, ...res.data})
         }).catch((err)=>{
            console.log(err.message);
         })
    },[])
   console.log(data);
  return (
  <>
   <div id='navbar'>
      <div id='leftnav'>
        <h5>Covid19 tracker</h5>
      </div>
      <div id='rightnav'>
        <input type="text"  placeholder='type something...'/>
        <button>
            Search
        </button>
      </div>
   </div>

   <div>
    <h1 id='title1'>Global Covid19 Information</h1>
   <div id='box2'>
     <div>Total Active Case : {data.Global?.TotalConfirmed}</div>
     <div>Total Recovered Case : {data.Global?.TotalRecovered}</div>
     <div>Total Deceased Case : {data.Global?.TotalDeaths}</div>
   </div>
   </div>
  </>
  )
}
