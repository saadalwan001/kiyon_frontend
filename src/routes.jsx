import React from "react";
import { Routes, Route } from "react-router-dom";

//All Pages
import Home from "@/homePage";




 function AppRoutes() {
  return (
    
   
    <Routes>
    {/*open accesible pages*/}
    <Route path="/" element={<Home/>}/>


    </Routes>

    
  )
}
export default AppRoutes;

