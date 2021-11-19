import React from 'react'
import './App.css'
import {useEffect} from 'react'
import $ from 'jquery'
function Navbar() {
  useEffect(() => {
    $("#navbtnn").on("click", function()
    {
        $("#navconn").slideToggle("slow");      
    }
    )
}, [])
    return (
        <>
   <div className="container">
  <nav id="navv" class="navbar navbar-expand-lg navbar-light pt-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="navvbrand"> <b> Thinkingbox </b></a>
    <button class="navbar-toggler" id="navbtnn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navconn">
      <ul class="navbar-nav text-center ms-auto mb-2 mb-lg-0" id="navvitem">
        <li class="nav-item mx-4">
          <a class="nav-link " id="navvl" aria-current="page" href="#">Work</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link active" id="navvl" href="#">Culture</a>
          <hr className="bg-dark text-dark mx-auto" id="chr" width="55vw" /> 
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link" id="navvl" href="#">Careers</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link" id="navvl" href="#">Contact</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link" id="navvl" href="#">Archive</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
</div>
        </>
    )
}

export default Navbar
