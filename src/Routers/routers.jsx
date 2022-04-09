import React from "react-dom";
import { Routes,Route } from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage } from "../pages/Home/homepage";

export default function Router(){
    return (
    <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/mock" element={<Mockman/>}/>
    </Routes>
    )
}
