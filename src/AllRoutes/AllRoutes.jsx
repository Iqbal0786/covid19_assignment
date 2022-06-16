
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Signup from '../components/Signup'
export default function AllRoutes() {
  return (
   <>
    <Routes>
        <Route path='/'  element={<Dashboard/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/register'  element={<Signup/>}/>
    </Routes>
   </>
  )
}
