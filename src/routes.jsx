import React from "react";
import { Routes, Route } from "react-router-dom";

//All Pages
import Home from "@/homePage";
import AboutUs from "@/About_us.jsx"
import Destination from "@/Destination.jsx"




 function AppRoutes() {
  return (
    
   
    <Routes>
    {/*open accesible pages*/}
    <Route path="/" element={<Home/>}/>

    <Route path="/AboutUs" element={<AboutUs/>}/>
     <Route path="/Destination" element={<Destination/>}/>


    </Routes>

    
  )
}
export default AppRoutes;

