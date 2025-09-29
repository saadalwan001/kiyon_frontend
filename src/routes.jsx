import React from "react";
import { Routes, Route } from "react-router-dom";

//All Pages
import Home from "@/homePage";
import AboutUs from "@/About_us.jsx"
import Destination from "@/Destination.jsx"
import Packages from "@/Packages.jsx"
import Gallery from "./Gallery";
import Contact from "./Contact";




 function AppRoutes() {
  return (
    
   
    <Routes>
    {/*open accesible pages*/}
    <Route path="/" element={<Home/>}/>

    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/Destination" element={<Destination/>}/>
    <Route path="/Packages" element={<Packages/>}/>
    <Route path="/Gallery" element={<Gallery/>}/>
    <Route path="/Contact" element={<Contact/>}/>


    </Routes>

    
  )
}
export default AppRoutes;

