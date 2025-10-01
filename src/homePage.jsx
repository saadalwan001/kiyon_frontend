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
import GallerySlider from "./Components/GallerySlider";




export default function homePage() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <AboutUs/>
    <WhyChooseUs/>
    <Destination/>
    <Attraction/>
    <GallerySlider/>
    <GetInTouch/>
    <Footer/>
    
    </>
  )
}
