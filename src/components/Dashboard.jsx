import React from 'react'
import "../styles/dashboard.css"
export default function Dashboard() {
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
     <div>Total Active Case :4000</div>
     <div>Total Recovered Case :4000</div>
     <div>Total Deceased Case :4000</div>
   </div>
   </div>
  </>
  )
}
