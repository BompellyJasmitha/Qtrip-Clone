import React, { useEffect, useState } from 'react';
import "../../Style/bstyle.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Newyorksubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);

    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>setApi([x]))
                        .catch((error)=>{console.log("NEWYORK SUB-CARDS API FAILED",error)}) 
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
 let Calnyonnenfield = () => <Newyorksubcards apiid="6302945339" />;
 let Nazachester = () => <Newyorksubcards apiid="0453764985" />;
 let Bucktim = () => <Newyorksubcards apiid="1248029271" />;
 let Mountvil = () => <Newyorksubcards apiid="0103492831" />;
 let Bridbouwispoon = () => <Newyorksubcards apiid="5568011370" />;
 let Darrondsor = () => <Newyorksubcards apiid="8138418941" />;
 let Lonsmathxbu = () => <Newyorksubcards apiid="8993280816" />;

export {Calnyonnenfield,Nazachester,Bucktim,Mountvil,Bridbouwispoon,Darrondsor,Lonsmathxbu}