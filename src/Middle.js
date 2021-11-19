import React from 'react'
import './App.css'
import $ from 'jquery'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
function Middle() {
   /* useEffect(() => {
        $("#web1").on("mouseover", function()
        {
            $("#web1").before("<h1 style='font-size:80px;text-align:center;' id='mount1'>Purple</h1>");
        })
        $("#web1").on("mouseout", function()
        {
           $("#mount1").remove();
        })
        $("#web2").on("mouseover", function()
        {
            $("#web2").before("<h1 style='font-size:80px;text-align:center;' id='mount2'>Invincible</h1>");
        })
        $("#web2").on("mouseout", function()
        {
           $("#mount2").remove();
        })
        $("#web3").on("mouseover", function()
        {
            $("#web3").before("<h1 style='font-size:80px;text-align:center;' id='mount3'>7-Eleven</h1>");
        })
        $("#web3").on("mouseout", function()
        {
           $("#mount3").remove();
        })
        }
    , []);*/
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="./Web1.jpg" id="web1" width="100%" height="auto"/>
                        <h4 className="mt-4">Cooooooooooooooooooool</h4>
                        <p id="difftext">Web content</p>

                    </div>
                    <div className="col-lg-6">
                    <img src="./Web2.jpg" id="web2" width="100%" height="auto"/>
                    <h4 className="mt-4 ms-5">Invincible Drive-in</h4>
                        <p id="difftext" className="ms-5">Web content second</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="./web3.jpg" id="web3" width="100%" height="auto"/>
                        <h4 className="mt-4">Web Connectivity</h4>
                        <p id="difftext">Web content third</p>

                    </div>
                    <div className="col-lg-6">
                    <img src="./Web4.jpg" id="web4" width="100%" height="auto"/>
                    <h4 className="mt-4 ms-5">Network Connection</h4>
                        <p id="difftext" className="ms-5">Web content Fourth</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <img src="./quickbooks.jpg" id="web5" width="100%" height="auto" />
                        <h4 className="mt-4 ms-5">QuickBooks Videos</h4>
                        <p id="difftext" className="ms-5">Intuit Content</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="./meal.jpg" id="web6" width="100%" height="auto"/>
                        <h4 className="mt-4">Always choose happy</h4>
                        <p id="difftext">Happy Egg Digital</p>

                    </div>
                    <div className="col-lg-6">
                    <img src="./cheetos.png" id="web7" width="100%" height="auto"/>
                    <h4 className="mt-4 ">The Snack Museum</h4>
                        <p id="difftext" className="">Cheetos Social, Content</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="./avengers.jpg" id="web8" width="100%" height="auto"/>
                        <h4 className="mt-4">Calling All Heroes</h4>
                        <p id="difftext">Mc Downlad's Experitential</p>

                    </div>
                    <div className="col-lg-6">
                    <img src="./car.jpg" id="web9" width="100%" height="auto"/>
                    <h4 className="mt-4 ">Genesis Walkway</h4>
                        <p id="difftext" className="">Genesis Motors Digital, Experitential</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="./wrangler.jpg" id="web10" width="100%" height="auto"/>
                        <h4 className="mt-4">Wrangler On My Booty</h4>
                        <p id="difftext">Wrangler Digital</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">
                         <button className="mybtn">  ____     All Projects</button>
                    </div>
                </div>
                <hr className="myhr"/>
                <a href="#" className="nav-link"  id="item1"><h1 className="display-2 text-dark">Our</h1></a>
                <hr id="hr1" height="50px" className="pt-1"/>
                <a href="#" className="nav-link" id="item2"><h1 className="display-2 text-dark" >Collective's</h1></a>
                <hr id="hr2" height="50px" className="pt-1"/>
                <Link to="/Culture" className="nav-link"  id="item3"><h1 className="display-2 text-dark">Culture</h1></Link>
                <hr id="hr3" height="50px" className="pt-1"/>
            </div>
          
        </>
    )
}

export default Middle
