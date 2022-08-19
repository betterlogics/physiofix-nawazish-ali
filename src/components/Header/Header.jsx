import React from 'react'
import {Link} from 'react-router-dom'
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Hidden brand</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about">About</Link>
          
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
