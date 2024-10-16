import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

// import Cards from './Cards';
import Navbar from "./navbar";
import QtripHome from './Qtriphome';
import Login from '../Pages/Login';
import Register from '../Pages/Registeration';
import Reservation from '../Pages/Reservation';
import Footer from './footer';
import Error from '../Pages/Errorpg';

import Bengaluru from "../Pages/Bengaluru/BengaluruMain"
import Niaboytown from "../Pages/Bengaluru/Niaboytown";
import Fortsionnnn from '../Pages/Bengaluru/Fortsionnnn';
import Wooddaux from '../Pages/Bengaluru/Wooddaux';
import Harbour from '../Pages/Bengaluru/Harbour';
import Stonelumhawk from '../Pages/Bengaluru/Stonelumhawk';
import Laanrncast from '../Pages/Bengaluru/Laanrncast';
import Fortshilbluff from '../Pages/Bengaluru/Fortshilbluff';
import Eastvyfolk from '../Pages/Bengaluru/Eastvyfolk';
import Shiwood from '../Pages/Bengaluru/Shiwood';

import Kolkata from '../Pages/Kolkata/KolkataMain';
import {Thton,Grandrubou,Nesbridge,Northgelgoon,Lalakechi,Annviriningsauk} from "../Pages/Kolkata/Kolkatasubcards"

import Goa from "../Pages/Goa/GoaMain";
import {Perthby,Kennticend,Pressalcreek,Heathber,Stplympside,Lowtra,Chettbouaux,Bucktim,Ntibranlake,Warflin} from "../Pages/Goa/Goasubcards"

import Malaysia from '../Pages/Malaysia/MalaysiaMain';
import {Stgosmydro,Sanboolburgh,Sterdallesannes,Wootkentree,Sonkinssands,Lia,Northldeztidsils} from '../Pages/Malaysia/Malaysiasubcards'

import Bangkok from '../Pages/Bangkok/BangkokMain';
import {Nishgaminhaprnia,Tifwalesferry,Rstangbe,Lastonlodgecrosse,Pidsskebury,Damsvens,Redcragrosse,Og,Colnehill,Mitsbowich,Mereceville} from '../Pages/Bangkok/Bangkoksubcards'

import Newyork from '../Pages/NewYork/NewyorkMain';
import {Calnyonnenfield,Nazachester,Mountvil,Bridbouwispoon,Darrondsor,Lonsmathxbu} from "../Pages/NewYork/Newyorksubcards"

import Paris from '../Pages/Paris/ParisMain';
import {Northvenwar,Ulgreenuponpockporth,Boltrailinroyamoor,Granddinyardlodge,Nia,Westmarsh,Paultra,Pidsspa,Milgee} from "../Pages/Paris/Parissubcards"


import Singapore from '../Pages/singapore/SingaporeMain';
export {Stgosmydro,Sanboolburgh,Sterdallesannesend,Wootkentree,Sonkinssands,Lia,Northldeztidsils} from "../Pages/singapore/Singaporesubcards"


export default class App extends React.Component{
    render(){
        return(
            
    <BrowserRouter>

     <Navbar/>

        <Routes>
            <Route path="/" element={<QtripHome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Reservation" element={<Reservation/>}/>
            <Route path="/*" element={<Error/>}/>
            
        


       

            {/* BENGALURU */}

            <Route path="/bengaluru" element={<Bengaluru/>}/>
            <Route path="/Niaboytown" element={<Niaboytown/>}/>
            <Route path="/Fort Sionnnn" element={<Fortsionnnn/>}/>
            <Route path="/Wooddaux" element={<Wooddaux/>}/>
            <Route path="/Bageorge With Nonshi Harbour" element={<Harbour/>}/>
            <Route path="/Stonelumhawk" element={<Stonelumhawk/>}/>
            <Route path="/La Anrncast" element={<Laanrncast/>}/>
            <Route path="/Fort shilbluff" element={<Fortshilbluff/>}/>
            <Route path="/Shiwood" element={<Shiwood/>}/>
            <Route path="/East Vyfolk" element={<Eastvyfolk/>}/>
        
        

            {/* GOA */}

            <Route path="/goa" element={<Goa/>}/>
            <Route path="/Perthby" element={<Perthby/>}/>
            <Route path="/Nesbridge" element={<Nesbridge/>}/>
            <Route path="/Kenntic End" element={<Kennticend/>}/>
            <Route path="/Pressal Creek" element={<Pressalcreek/>}/>
            <Route path="/Heathber" element={<Heathber/>}/>
            <Route path="/St Plympside" element={<Stplympside/>}/>
            <Route path="/Lowtra" element={<Lowtra/>}/>
            <Route path="/Chettbou Aux Dersting" element={<Chettbouaux/>}/>
            <Route path="/Ntibran Lake" element={<Ntibranlake/>}/>
            <Route path="/Warflin" element={<Warflin/>}/>

        

            {/* KOLKATA */}

            <Route path="/kolkata" element={<Kolkata/>}/>
            <Route path="/Thton" element={<Thton/>}/>
            <Route path="//Grand Rubou Du Wagten" element={<Grandrubou/>}/>
            {/*  <Route path="/Nesbridge" element={<Nesbridge/>}/>  */}
            <Route path="/North Gelgoon" element={<Northgelgoon/>}/>
            <Route path="/La Lakechi With Lipentage" element={<Lalakechi/>}/>
            <Route path="/Annvir-In-Ingsauk Lake" element={<Annviriningsauk/>}/>

       

            {/* MALAYSIA */}
   
            <Route path="/malaysia" element={<Malaysia/>}/>
            <Route path="/St Gosmydro" element={<Stgosmydro/>}/>
            <Route path="/Sanboolburgh" element={<Sanboolburgh/>}/>
            <Route path="/Sterdallesannes End" element={<Sterdallesannes/>}/>
            <Route path="/Wootkentree" element={<Wootkentree/>}/>
            <Route path="/Sonkins Sands" element={<Sonkinssands/>}/>
            <Route path="/Lia" element={<Lia/>}/>
            <Route path="/North Ldeztidsils" element={<Northldeztidsils/>}/>  
        

                {/* BANGKOK */}

            <Route path="/bangkok" element={<Bangkok/>}/>
            <Route path="/Nishgam-In-Haprnia" element={<Nishgaminhaprnia/>}/>
            <Route path="/Tifwales Ferry" element={<Tifwalesferry/>}/>
            <Route path="/Rstangbe" element={<Rstangbe/>}/>
            {/* <Route path="/Heathber" element={<Heathber/>}/> */}
            <Route path="/La Stonlodgecrosse" element={<Lastonlodgecrosse/>}/>
            <Route path="/Pidsskebury" element={<Pidsskebury/>}/>
            <Route path="/Damsvens" element={<Damsvens/>}/>
            <Route path="/Red Cragrosse" element={<Redcragrosse/>}/>
            <Route path="/Og" element={<Og/>}/>
            <Route path="/Colnehill" element={<Colnehill/>}/>
            <Route path="/Mitsbowich" element={<Mitsbowich/>}/>
            <Route path="/Mereceville" element={<Colnehill/>}/>

        

                {/* NEWYORK */}

        <Route path="/new-york" element={<Newyork/>}/>
        <Route path="/Calnyonnenfield" element={<Calnyonnenfield/>}/>
        <Route path="/Nazachester" element={<Nazachester/>}/>
        <Route path="/Bucktim" element={<Bucktim/>}/>
        <Route path="/Mount Vil" element={<Mountvil/>}/>
        <Route path="/Bridbouwispoon" element={<Bridbouwispoon/>}/>
        <Route path="/Darrondsor" element={<Darrondsor/>}/>
        <Route path="/Lonsmathxbu" element={<Lonsmathxbu/>}/>

      

            {/* PARIS */}

          <Route path="/paris" element={<Paris/>}/>
          {/* <Route path="/Lowtra" element={<Lowtra/>}/> */}
          <Route path="/North Venwar" element={<Northvenwar/>}/>
          <Route path="/Ulgreen Upon Pockporth" element={<Ulgreenuponpockporth/>}/>
          <Route path="/Boltrail-In-Royamoor" element={<Boltrailinroyamoor/>}/>
          <Route path="/Grand Dinyardlodge" element={<Granddinyardlodge/>}/>
          <Route path="/Nia" element={<Nia/>}/>
          <Route path="/West Marsh" element={<Westmarsh/>}/>
          <Route path="/Paultra" element={<Paultra/>}/>
          <Route path="/Pidsspa" element={<Pidsspa/>}/>
          <Route path="/Milgee" element={<Milgee/>}/>

        

                {/* SINGAPORE */}

            <Route path="/singapore" element={<Singapore/>}/>
            <Route path="/St Gosmydro" element={<Stgosmydro/>}/>
            <Route path="/Sanboolburgh" element={<Sanboolburgh/>}/>
            {/* <Route path="/Sterdallesannes End" element={<Sterdallesannesend/>}/> */}
            <Route path="/Wootkentree" element={<Wootkentree/>}/>
            <Route path="/Sonkins Sands" element={<Sonkinssands/>}/>
            <Route path="/Lia" element={<Lia/>}/>
            <Route path="/North Ldeztidsils" element={<Northldeztidsils/>}/>
            
        </Routes>
  

        <Footer/>

    </BrowserRouter>     
            
        )
    }
}