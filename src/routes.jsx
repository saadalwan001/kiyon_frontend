import React from "react";
import { Routes, Route } from "react-router-dom";

//All Pages
import Home from "@/homePage";
import AboutUs from "@/About_us.jsx"




 function AppRoutes() {
  return (
    
   
    <Routes>
    {/*open accesible pages*/}
    <Route path="/" element={<Home/>}/>

    <Route path="/AboutUs" element={<AboutUs/>}/>


    </Routes>

    
  )
}
export default AppRoutes;

