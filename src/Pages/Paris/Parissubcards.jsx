import React, { useEffect, useState } from 'react';
import "../../Style/bstyle.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Parissubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);

    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>setApi([x]))
                        .catch((error)=>{console.log("PARIS SUB-CARDS API FAILED",error)}) 
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
 let Lowtra = () => <Parissubcards apiid="9536498117" />;
 let Northvenwar = () => <Parissubcards apiid="2008775850" />;
 let Ulgreenuponpockporth = () => <Parissubcards apiid="6905241907" />;
 let Boltrailinroyamoor= () => <Parissubcards apiid="5770077080" />;
 let Granddinyardlodge = () => <Parissubcards apiid="6298356896" />;
 let Nia = () => <Parissubcards apiid="3365319720" />;
 let Westmarsh = () => <Parissubcards apiid="9680463758" />;
 let Paultra = () => <Parissubcards apiid="5244806429" />;
 let Pidsspa = () => <Parissubcards apiid="3077909052" />;
 let Milgee = () => <Parissubcards apiid="5308549680" />;

export {Lowtra,Northvenwar,Ulgreenuponpockporth,Boltrailinroyamoor,Granddinyardlodge,Nia,Westmarsh,Paultra,Pidsspa,Milgee}