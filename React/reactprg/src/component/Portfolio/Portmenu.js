import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export function Portmenu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <Link to='/portfolio' class="navbar-brand text-black">My portfolio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav fs-5">
      <li class="nav-item">
          <Link to='/Portfolio/Port-Home' class="nav-link text-black" aria-current="page">Home</Link>
        </li>
      <li class="nav-item">
          <Link to='/Portfolio/About' class="nav-link text-black" aria-current="page">About</Link>
        </li>
        <li class="nav-item">
          <Link to='/Portfolio/Education' class="nav-link text-black" aria-current="page">Education</Link>
        </li>
        <li class="nav-item">
          <Link to='/Portfolio/Skills' class="nav-link text-black" href="#">Skills</Link>
        </li>
        <li class="nav-item">
          <Link to='/Portfolio/Certification' class="nav-link text-black" href="#">Certification</Link>
        </li>
        <li class="nav-item">
          <Link to='/Portfolio/Work' class="nav-link text-black" href="#">Work</Link>
        </li>
        <li class="nav-item">
          <Link to='/Portfolio/Contact' class="nav-link text-black" href="#">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
         
        </>
    )
}

