import React from "react";
import Navbar from "@/Components/client_navbar.jsx"
import Slider from "@/Components/slider.jsx"
import AboutUs from "@/Components/AboutUs.jsx";
import WhyChooseUs from "@/Components/WhyChooseUs.jsx";
import Destination from "@/Components/Destination_Page.jsx"
import Attraction from "./Components/Attraction";
import Packages from "./Components/Packages.jsx"
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";




export default function homePage() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <AboutUs/>
    <WhyChooseUs/>
    <Destination/>
    <Attraction/>
    <Packages/>
    <GetInTouch/>
    <Footer/>
    
    </>
  )
}
