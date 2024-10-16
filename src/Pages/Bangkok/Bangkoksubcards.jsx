import React, { useEffect, useState } from 'react';
import "../../Style/bstyle.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Bangkooksubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);

    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>setApi([x])).catch((error)=>{console.log("BANGKOK SUB-CARDS API FAILED",error)})},[]);

                        // console.log(apiid)
                        // console.log(api)
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

 let Nishgaminhaprnia = () => <Bangkooksubcards apiid="8304353098" />;
 let Tifwalesferry = () => <Bangkooksubcards apiid="5328424651" />;
 let Rstangbe = () => <Bangkooksubcards apiid="3366378787" />;
 let Heathber = () => <Bangkooksubcards apiid="5941490724" />;
 let Lastonlodgecrosse = () => <Bangkooksubcards apiid="0101381654" />;
 let Pidsskebury = () => <Bangkooksubcards apiid="2674554670" />;
 let Damsvens = () => <Bangkooksubcards apiid="6216388298" />;
 let Redcragrosse = () => <Bangkooksubcards apiid="2273854765" />;
 let Og = () => <Bangkooksubcards apiid="9828912080" />;
 let Colnehill = () => <Bangkooksubcards apiid="2052303734" />;
 let Mitsbowich = () => <Bangkooksubcards apiid="3396851354" />;
 let Mereceville = () => <Bangkooksubcards apiid="3409781073" />;

export {Nishgaminhaprnia,Tifwalesferry,Rstangbe,Heathber,Lastonlodgecrosse,Pidsskebury,Damsvens,Redcragrosse,Og,Colnehill,Mitsbowich,Mereceville}