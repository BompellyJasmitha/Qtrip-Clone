import React from 'react';
import "../../Style/bstyle.css"
import { useEffect,useState } from 'react';

// Carousel

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Harbour(){

    let[api,setapi]=useState([])

    useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2260150453")
        .then(x=>x.json())
        .then(y=>setapi([y]))
        .catch((error)=>{console.log("BENGALURU SUB-CARD HARDOUR/BAGEORGE WITH NONSHI HARDOUR API FAILED",error)}) 
                },[])

                

return(<>

{api.map((x,k1)=>{

        return(
                <div key={k1} id="NiaboytownDiv"> 
                    <h1>{x.name}</h1>
                         <h2 >{x.subtitle}</h2>
                         <div  id="CarouselimgDiv">
                             <Carousel>

                             <div><img className="carouselImg" src={x.images[0]}/></div>
                             <div><img className="carouselImg"  src={x.images[1]} /></div>
                             <div><img className="carouselImg"  src={x.images[2]}/></div>

                             </Carousel>
                       </div>
                       <div>_________________________________________________________________________________________________</div>

                         <h3 id="Carouselh3">About the Experience</h3>

                         <p id="CarouselPara">{x.content}</p>


                        </div>

                        )})}
             
</>)

}


    





