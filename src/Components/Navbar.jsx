import React from "react"
import {Link} from "react-router-dom"



const Navbar = () => {
    return (
        <>
        <nav className="  navbar navbar-expand-lg navbar-light bg-light nav-justified justify-content-between">
  <div className="container-fluid ">
  <Link className="navbar-brand" to="#">
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className=" ok  navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/short">Short</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            
        </>
    )
}

export default Navbar
