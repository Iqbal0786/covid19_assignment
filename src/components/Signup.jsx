import React from 'react'
import '../styles/signup.css'
import {Link} from "react-router-dom"
export default function Signup() {
  return (
   <>
   <div id='box'>
     <div>
     <label htmlFor="">First Name :  </label>
     <input type="text"  placeholder='first name'/>
     </div>
     
     <div>
     <label htmlFor="">Last Name :  </label>
     <input type="text"  placeholder='Last name'/>
     </div>
     <div>
     <label htmlFor="">Email id :  </label>
     <input type="text"  placeholder='email address'/>
     </div>
     <div>
     <label htmlFor="">Password :  </label>
     <input type="password"  placeholder='password'/>
     </div>
     <button>Register</button>
     <Link to={"/login"} style={{textDecoration:"none"}}>
       <p>Click to login</p>
       </Link>
   </div>

   
   
   </>
  )
}
