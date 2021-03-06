import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../styles/dashboard.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useSelector} from "react-redux"
import Login from './Login';

export default function Dashboard() {
     const {token} = useSelector((store)=>store.logInData)
     console.log(token)
    const [data,setData]=useState({})
    const [name,setName]=useState("")
    const [found,setfound]=useState(true)
    const[searched,setSearched]=useState([])
    // if(name==""){
    //   fetchData()
    // }

    useEffect(()=>{
         fetchData()
    },[])
    const fetchData=()=>{
      axios.get("https://covid19db1.herokuapp.com/covids").then((res)=>{
        console.log(res.data);
            setData({...data, ...res.data[0]})
         }).catch((err)=>{
            console.log(err.message);
         })
    }
    let mapdata=data.Countries
    if(searched.length){
         mapdata=searched
    }
    else{
     // fetchData()
    }
  const formatXAxis = (tickItem) => {
       return new Date(tickItem).toLocaleDateString()
  }
   
  const filterData=()=>{
      let temp= [...data.Countries]
       let filtered= temp.filter((el)=>el.Country.toLowerCase()==name)
       if(filtered.length){
        setSearched([...filtered])
       
       }
       else{
    
         setfound(false)
       }
       
  
  }
  // console.log(data.Countries)
  return (
  <>
  {token?<>
    <div id='navbar'>
      <div id='leftnav'>
        <h5>Covid19 tracker</h5>
      </div>
      <div id='rightnav'>
        <input type="text"  placeholder='search by country name ' onChange={(e)=>{
            //  let temp= [...data.Countries]
            //  let filtered= temp.filter((el)=>el.Country==e.target.value)
            //  setData([...filtered])
             setName(e.target.value)
        }}/>
        <button onClick={filterData}>
            Search
        </button>
      </div>
   </div>
    {!found?<p style={{textAlign:"center"}}>no result found of  {name}</p>:""}
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
        <h1 id='title2'>Country wise recods</h1>
        <div id='tableBox'>
        
          <table>
            <tr>
                <th>Name</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deceased</th>
            
            </tr>
              {
               mapdata?  mapdata.map((el)=>{
                  return <>
                  <tr key={el.ID}>
                <td>{el.Country}</td>
                <td>{el.TotalConfirmed}</td>
                <td>{el.TotalRecovered}</td>
                <td>{el.TotalDeaths}</td>
              </tr>
                  </>
                })
                :""
              }
             
          
          </table>

        </div>
    </>:<Login/>}
  </>
  )
}
