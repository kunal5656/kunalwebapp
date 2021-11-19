import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
function Footer() {
    return (
        <>
            <footer>
                <div className="container" id="foot">

                <div className="row">
                    <div className="col-lg-6">
                    <div className="row">
                    <div className="col-4">
                        <ul className="list-unstyled" id="footlist">
                          <Link to="/" className="nav-link">  <li id="footitem1"  className="mt-2">Home</li></Link>
                          <a href="#" className="nav-link">  <li id="footitem2" className="mt-2">Work</li></a>
                          <Link to="/Culture" className="nav-link">  <li id="footitem3" className="mt-2">Culture</li></Link>
                           <a href="#" className="nav-link"> <li id="footitem4" className="mt-2">Careers</li></a>
                           <a href="#" className="nav-link"> <li id="footitem5" className="mt-2">Contact</li></a>
                          <a href="#" className="nav-link">  <li id="footitem6" className="mt-2">Archive</li></a>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <ul className="list-unstyled" id="footlist2">
                        <a href="#" className="nav-link">     <li id="footitem7" className="mt-2">Anti Social</li></a>
                        <a href="#" className="nav-link">    <li id="footitem8" className="mt-2">Talk Nerdy</li></a>
                      
                        </ul>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-top align-items-end flex-column">
                    <button className="mybtn2">  ______  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Work With Us</button>
                    <div className="row mt-5">
                        <div className="col-auto">
                            <a href="#" className="icon1"><h1 className="text-dark"><i class="fab fa-instagram icon1"></i></h1></a>
                        </div>
                        <div className="col-auto">
                        <a href="#" className="icon2">  <h1 className="text-dark"><i class="fab fa-linkedin icon2"></i></h1></a>
                        </div>
                        <div className="col-auto">
                        <a href="#" className="icon3">    <h1 className="text-dark"><i class="fab fa-vimeo-v icon3"></i></h1></a>
                        </div>
                        <div className="col-auto me-3">
                        <a href="#" className="icon4"><h1 className="text-dark"><i class="fab fa-medium icon4"></i></h1></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <marquee width="100%" direction="left" height="80px" className="mymar" loop >
                    THINK? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    "THINK"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    THINK. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    THINK! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    THINK, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                </marquee>
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-lg-10">
                            <div className="row mt-3">

                        <div className="col-lg-auto">
                            <a href="#" className="nav-link text-dark a1"><h5> © Thinkingbox 2021 </h5></a>
                            <hr  id="hr4" width="100%"  className="mb-5"/>
                        </div>
                        <div className="col-lg-auto">
                            <a href="#" className="nav-link text-dark a2"><h5>  Terms and Conditions </h5></a>
                            <hr  id="hr5" width="100%" className="mb-5"/>
                        </div>
                        <div className="col-lg-auto">
                            <a href="#" className="nav-link text-dark a3"><h5>  Privacy Policy </h5></a>
                            <hr  id="hr6" width="100%" className="mb-5"/>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-2">
                            <Link to="/" id="navvbrand" className="nav-link text-dark">Thinkingbox</Link>
                        </div>    
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
