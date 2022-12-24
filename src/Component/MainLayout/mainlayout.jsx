import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/navbar'
export default function mainlayout() {
  return (
<>
    <NavBar/>
<div className="bg-black bg-opacity-50 p-md-0 mb-md-0">
   <Outlet/>
</div></>
  )
}
