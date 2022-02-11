import React, { useState } from "react";

import Landing from "../../components/Landing";

import Nav from "../../components/Nav";

import '../../css/LandingStyle.css';

export default function LandingPage(){
    
    const valueCss = "Hidden";

    return (
        <>
            <Nav styleCss={valueCss}/>
            <Landing />
        </>

    )

}