import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <>
<nav className=" navbar py-2 navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand d-flex align-items-center" to=""><i className="fa-solid fa-gamepad me-2 fs-4 icon"></i>PLAY NOW</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='all'>All</Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link" to='pc'>PC</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='browser'>Browser</Link>
        </li> 
         <li className="nav-item">
          <Link className="nav-link" to='category'>Category</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
