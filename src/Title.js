import React from 'react'
import './App.css'
import {useEffect} from 'react';
import $ from 'jquery';
function Title() {
    useEffect(() => {
        $("#mdrise").on("mouseover", function()
        {
            $("#mdrise").before("<h1 style='font-size:120px;text-align:center;' id='mount'>Mountain Dew</h1>");
        })
        $("#mdrise").on("mouseout", function()
        {
           $("#mount").remove();
        })
        }
    , []);
    return (
        <>
              <div className="container">   
                <div className="row">
                     <div className="col-lg-12">
            
                <p className="p-4  mt-5" id="title">
                We are a global <br /> Creative Collective
                 </p>
                <h3 id="title2" className="">We Shape the future of brands <br /> throught art and curiosity</h3>
                </div>   
                </div>
                </div>
               <div className="container">    
               <hr />
                <div className="row" >
                    <div className="col-lg-12 " id="roww">
                    <img src="./MDRISE.png" id="mdrise" width="100%" height="auto" className="pt-5 mt-5" />
                    </div>
                </div>
                <h4 className="mt-4">Mountain Dew Rise</h4>
                <p id="difftext">PepsiCo Digital</p>

               </div>
               
            
            
        </>
    )
}

export default Title
