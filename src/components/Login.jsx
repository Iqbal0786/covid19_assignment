import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import "../styles/signup.css"
import { loginSuccessData } from '../Redux/LogInRedux/LogAction';
export default function Login() {
  const navigate=useNavigate()
  const [data,setData]=useState({
   email:"",
   password:""
  });
  const dispatch= useDispatch();
  

  const getData=(e)=>{
    let {id,value}= e.target;
    setData({...data, [id]:value})
  }
  const postData=()=>{
      dispatch(loginSuccessData(data,navigate))
  }
  return (
<>
<div id='box'>
     <div>
     <label htmlFor="">Email id :  </label>
     <input id='email' type="text"  placeholder='email address' onChange={getData}/>
     </div>
     <div>
     <label htmlFor="">Password :  </label>
     <input id='password' type="password"  placeholder='password' onChange={getData}/>
     </div>
     <button onClick={()=>{
       postData()
     }}>Login</button>
       <Link to={"/register"}  style={{textDecoration:"none"}}>
       <p>Create new account</p>
       </Link>
   </div>

</>
  )
}
