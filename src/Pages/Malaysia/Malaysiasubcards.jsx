import React, { useEffect, useState } from 'react';
import "../../Style/bstyle.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Malaysiasubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);

    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>setApi([x]))
                        .catch((error)=>{console.log("MALAYSIA SUB-CARDS API FAILED",error)}) 
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
 let Stgosmydro = () => <Malaysiasubcards apiid="0306928663" />;
 let Sanboolburgh = () => <Malaysiasubcards apiid="8729187639" />;
 let Sterdallesannes = () => <Malaysiasubcards apiid="8047300314" />;
 let Wootkentree = () => <Malaysiasubcards apiid="4327638849" />;
 let Sonkinssands = () => <Malaysiasubcards apiid="9824784423" />;
 let Lia = () => <Malaysiasubcards apiid="1371613966" />;
 let Northldeztidsils = () => <Malaysiasubcards apiid="3421411190" />;

export {Stgosmydro,Sanboolburgh,Sterdallesannes,Wootkentree,Sonkinssands,Lia,Northldeztidsils}