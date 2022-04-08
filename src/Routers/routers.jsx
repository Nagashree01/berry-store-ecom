import React from "react-dom";
import { Routes,Route } from "react-router-dom";
import Mockman from "mockman-js";

export default function Router(){
    return (
    <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/mock" element={<Mockman/>}/>
    </Routes>
    )
}
