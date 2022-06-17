import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../styles/dashboard.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
  const formatXAxis = (tickItem) => {
       return new Date(tickItem).toLocaleDateString()
  }
  
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
     <div> Total Active Case : {data.Global?.TotalConfirmed}</div>
     <div> Total Recovered : {data.Global?.TotalRecovered}</div>
     <div> Total Deceased : {data.Global?.TotalDeaths}</div>
   </div>
   <div id='box2'>
     <div> New Active Case : {data.Global?.NewConfirmed}</div>
     <div>  New Recovered : {data.Global?.NewRecovered}</div>
     <div>  New Deceased : {data.Global?.NewDeaths}</div>
   </div>
   </div>

   <BarChart
          width={1000}
          height={400}
          data={[data.Global]}
          margin={{
            top: 50,
            right: 30,
            left: 100,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date"  tickFormatter={formatXAxis}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="NewConfirmed" stackId="a" fill="#8884d8" />
          <Bar dataKey="NewRecovered" stackId="b" fill="#82ca9d" />
          <Bar dataKey="NewDeaths" stackId="c" fill="#d8df05" />
        </BarChart>
  </>
  )
}
