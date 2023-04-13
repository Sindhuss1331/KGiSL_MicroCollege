import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export function Menu(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <div class="container-fluid">
    <Link class="navbar-brand text-white">Moodle-task</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav fs-5">
      {/* <li class="nav-item">
          <Link to='/Portfolio' class="nav-link text-white" aria-current="page">Home</Link>
        </li> */}
        <li class="nav-item ">
          <Link to='/portfolio' class="nav-link text-white">PortFolio</Link>
        </li>
        <li class="nav-item">
          <Link to='/hello' class="nav-link text-white" aria-current="page">Hello</Link>
        </li>
        <li class="nav-item">
          <Link to='/congrats' class="nav-link text-white" aria-current="page">congrats</Link>
        </li>
        <li class="nav-item">
          <Link to='/SuperLeague' class="nav-link text-white" href="#">League</Link>
        </li>
        <li class="nav-item">
          <Link to='/Socialbtn' class="nav-link text-white" href="#">Social</Link>
        </li>
        <li class="nav-item ">
          <Link to='/Notify' class="nav-link text-white">Notify</Link>
        </li>
        <li class="nav-item ">
          <Link to='/Login' class="nav-link text-white">Login</Link>
        </li>
        <li class="nav-item ">
          <Link to='/Technology' class="nav-link text-white">Technologies</Link>
        </li>
        <li class="nav-item ">
          <Link to='/Counter' class="nav-link text-white">Counter</Link>
        </li>
        <li class="nav-item ">
          <Link to='/Fruitscounter' class="nav-link text-white">Fruitscounter</Link>
        </li>
        <li class="nav-item ">
          <Link to='/Feedback' class="nav-link text-white">Feedback</Link>
        </li>
        <li class="nav-item ">
          <Link to='/Thank' class="nav-link text-white">Thank</Link>
        </li>
        <li class="nav-item ">
          <Link to='/Date' class="nav-link text-white">Date</Link>
        </li>
        <li class="nav-item ">
          <Link to='/products' class="nav-link text-white">products</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
         
        </>
    )
}

