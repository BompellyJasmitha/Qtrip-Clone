import React, { useEffect, useState } from 'react';
import "../../Style/bstyle.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Singaporesubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);

    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>setApi([x]))
                        .catch((error)=>{console.log("SINGAPORE SUB-CARDS API FAILED",error)}) 
                    },[]);
                    
    return ( <>
            {api.map((x, k1) => (
                <div key={k1}  id="NiaboytownDiv">
                    <h1>{x.name}</h1>
                    <h2>{x.subtitle}</h2>
                    <div id="CarouselimgDiv">
                    <Carousel >

                    <img className="carouselImg" src={x.images[0]}/>
                    <img className="carouselImg"  src={x.images[1]} />
                    <img className="carouselImg"  src={x.images[2]}/>

                    </Carousel>
                    </div>
                    <div>____________________________________________________________________________________</div>
                    <h3 id="Carouselh3">About the Experience</h3>
                    <p id="CrouselPara">{x.content}</p>
                </div>
            ))}
        </>);
};
 let Stgosmydro = () => < Singaporesubcards apiid="0306928663" />;
 let Sanboolburgh = () => < Singaporesubcards apiid="8729187639" />;
 let Sterdallesannesend = () => < Singaporesubcards apiid="8047300314" />;
 let Wootkentree= () => < Singaporesubcards apiid="4327638849" />;
 let Sonkinssands = () => < Singaporesubcards apiid="9824784423" />;
 let Lia = () => < Singaporesubcards apiid="1371613966" />;
 let Northldeztidsils = () => < Singaporesubcards apiid="3421411190" />;


export {Stgosmydro,Sanboolburgh,Sterdallesannesend,Wootkentree,Sonkinssands,Lia,Northldeztidsils}