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
     <div>Total Active Case : {data.Global?.TotalConfirmed}</div>
     <div>Total Recovered Case : {data.Global?.TotalRecovered}</div>
     <div>Total Deceased Case : {data.Global?.TotalDeaths}</div>
   </div>
   </div>

   <BarChart
          width={1000}
          height={400}
          data={[data.Global]}
          margin={{
            top: 20,
            right: 30,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date"  tickFormatter={formatXAxis}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TotalConfirmed" stackId="a" fill="#8884d8" />
          <Bar dataKey="TotalRecovered" stackId="b" fill="#82ca9d" />
          <Bar dataKey="TotalDeaths" stackId="b" fill="#d8df05" />
        </BarChart>
  </>
  )
}
