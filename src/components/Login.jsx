import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/signup.css"
export default function Login() {
  const naviage=useNavigate()
  return (
<>
<div id='box'>
     <div>
     <label htmlFor="">Email id :  </label>
     <input type="text"  placeholder='email address'/>
     </div>
     <div>
     <label htmlFor="">Password :  </label>
     <input type="password"  placeholder='password'/>
     </div>
     <button>Login</button>
       <Link to={"/register"}  style={{textDecoration:"none"}}>
       <p>Create new account</p>
       </Link>
   </div>

</>
  )
}
