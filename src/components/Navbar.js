import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar=()=>{
const[search,setSearch]=useState('');

const notWorking=(e)=>{
 setSearch(e.target.value);
}
const workInProgress=()=>{
  alert(`${search} is not available because of the limited data`)
}

    const changeMode = (e) => {
        if (e.target.checked) {
          document.body.style.background = "black";
          document.body.style.color="white";
        } else {
          document.body.style.background = "white";
          document.body.style.color="black";
        }
      }
      

  return (
   
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">ApnaDukan</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" target="_self" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/electronics">Electronics</Link></li>
              <li><Link className="dropdown-item" to="/jewelery">Jewelery</Link></li>
              <li><Link className="dropdown-item" to="/mensClothing">Men's clothing</Link></li>
              <li><Link className="dropdown-item" to="/womensClothing">Women's clothing</Link></li>
            </ul>
          </li>
        </ul>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" onChange={notWorking} type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" onClick={workInProgress} type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}
export default Navbar;