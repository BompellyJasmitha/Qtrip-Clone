import React from 'react';
import {Link} from "react-router-dom";

import "../Style/index.css";



// CARDS WITH PROPS


import { useState,useEffect } from 'react';

export default function Cards(){
  
  
let[api,setapi]=useState([])



  useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
    .then(x=>x.json())
    .then(y=>setapi(y)).catch((error)=>{console.log("Cities API Failed",error)})
 
  })


    // console.log("appi ---->>",this.state.api)
    return(
          
        
          <div id="cardsdiv">
          {api.map((y,k1)=>{return(
            <Link key={k1} to={"/"+y.id}>
            <div className="tile" style={{margin:"10px"}}>
              <img  src={y.image}/>
              <div className="tdata">
              <h5 className="tdh5">{y.id.toUpperCase()}</h5>
              <p className="tdp">{y.description}</p>
              </div>
            </div>
            </Link>
            )})
          }
           </div>
        
        
    )



  }
