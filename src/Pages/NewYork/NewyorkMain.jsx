import React from 'react';
import "../../Style/bstyle.css"

import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';


export default function Newyork(){

    let[api,setapi]=useState([])

    useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=new-york")
        .then(x=>x.json())
        .then(y=>setapi(y))
        .catch((error)=>{console.log("NEWYORK API FAILED",error)})  
})

    return(
        <>
<div id="bmain">
    
        {/* second nav */}

            <div id="bdiv1">
                <h1>Explore all adventures</h1>
                <p>Here's a list of places that you can explore in city</p>
                <div id="bdiv11">
                    <label htmlFor="">Filters </label>
                    <div id="bdiv111">
                        <select name=""  className='tab'>
                            <option>Filter by Duration (Hours)</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>

                    <div id="bdiv112">
                        <select name=""  className='tab'>
                            <option value="">Add Category</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>
                    <div id="bdiv113">
                        <input type="text" placeholder='Search adventures' className='tab'/>
                        <div className='cleardiv'>Clear</div>
                    </div>
                </div>
            </div>
        {/* cards */}

    <div id="bdiv2">
    {api.map((x,k1)=>{
   
        return(

        <Link key={k1} to={"/"+x.name}>
        <div className="BenSubCards">   
                <img src={x.image}/>
                <p  className="category">{x.category}</p>
                <h5 className="h51">{x.name}</h5>
                <p  className="price">₹{x.costPerHead}</p>
                <p className="Duration">Duration</p>
                <p  className="DurationValue">{x.duration} Hours</p>
        </div>
        </Link>
 
        )})}

    </div>
</div>
    </>
    )
}
   
