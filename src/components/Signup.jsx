import React from 'react'
import '../styles/signup.css'
import {Link , useNavigate} from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { RegisterHandler } from '../Redux/RegisterRedux/Register/RegisterAction';
export default function Signup() {
  const navigate=useNavigate()
   const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
   });

   const dispatch= useDispatch();
   

   const getData=(e)=>{
     let {id,value}= e.target;
     setData({...data, [id]:value})
   }
   const postData=()=>{
       dispatch(RegisterHandler(data,navigate))
   }
   console.log(data);
  return (
   <>
   <div id='box'>
     <div>
     <label htmlFor="">First Name :  </label>
     <input   id='firstName' type="text"  placeholder='first name' onChange={getData}/>
     </div>
     
     <div>
     <label htmlFor="">Last Name :  </label>
     <input id='lastName' type="text"  placeholder='Last name'  onChange={getData}/>
     </div>
     <div>
     <label htmlFor="">Email id :  </label>
     <input id='email' type="text"  placeholder='email address'  onChange={getData}/>
     </div>
     <div>
     <label htmlFor="">Password :  </label>
     <input id='password' type="password"  placeholder='password'  onChange={getData}/>
     </div>
     <button onClick={()=>{
      postData();
     }}>Register</button>
     <Link to={"/login"} style={{textDecoration:"none"}}>
       <p>Click to login</p>
       </Link>
   </div>

   
   
   </>
  )
}
